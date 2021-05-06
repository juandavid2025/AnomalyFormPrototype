import React, { Component } from 'react';
import Modal from "react-modal";
import { Button, Table } from "react-bootstrap";
import ReportForm from "../components/ReportForm";
import firebase from "../config/firebase";
import {Link} from "react-router-dom";
import "../styles/home.css";

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            reports:[ ],
            report:{ id:"", lab: "", protocol:"", sendDate:null, labId:"", period:"" },
            modalOpen: false,
            db: firebase.firestore(),
            baseReport:{ id:"", lab: "", protocol:"", sendDate:null, labId:"", period:"" }
        }
    }

    componentDidMount(){
        this.getReports();
    }

    getReports = () =>{
        let reports = [];

        this.state.db.collection("reporte").get().then( querySnapshot =>{
            querySnapshot.forEach( doc => {
                reports.push(doc.data());
                console.log(doc.data());
            })
            reports.forEach(rep => rep.sendDate=new Date(rep.sendDate.seconds*1000));
            this.setState({reports});
        } 
        )
    }

    InvertOpenModal=()=>{
        let value = this.state.modalOpen;
        this.setState({modalOpen: !value});
    }

    handleOnSubmit=(reportAdd)=>{
        //console.log(reportAdd);
        if(reportAdd.id === ""){
            let id = parseInt(this.getId()) + 1;
            reportAdd.id = id+"";
            console.log(id);
        }
        this.state.db.collection("reporte").doc(reportAdd.id).set(reportAdd);
        this.getReports();
    }

    renderReports(){
        let reportList = this.state.reports.map((report) =>(
            <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.lab}</td>
                <td>{report.labId}</td>
                <td>
                    <Button className="actionBtn" variant="warning" onClick={()=> this.onEdit(report)}>
                        Editar
                    </Button>
                    <Button className="actionBtn" variant="danger" onClick={()=> this.onDelete(report)}>
                        Eliminar
                    </Button>
                </td>
                <td>
                    <Link to={`/report/${report.id}`}>
                        <Button variant="info">
                            CIOMS
                        </Button>
                    </Link>
                </td>
            </tr>
        ));

        return reportList;
    }

    onEdit=(report)=>{
        //console.log(report);
        //console.log(report.sendDate.seconds);
        //let date = new Date(report.sendDate.seconds*1000);
        //report.sendDate=date;
        this.setState({report});
        this.InvertOpenModal();
        this.getReports();
    }

    onDelete=(reportDel)=>{

        let attachedCIOMS = [];

        this.state.db.collection("reporte").doc(reportDel.id+"").collection("sintomas").get().then( querySnapshot =>{
            querySnapshot.forEach( attCiOMS => {
                attachedCIOMS.push(attCiOMS.data());
            })
            if(attachedCIOMS.length!==0){
                attachedCIOMS.forEach(ciom => 
                    this.state.db.collection("reporte").doc(reportDel.id+"").collection("sintomas").doc(""+ciom.id).delete()
                    );
            }
        } 
        )

        this.state.db.collection("reporte").doc(reportDel.id+"").delete();
        this.getReports();
    }

    getId = () =>{
        let reports = this.state.reports;
        if(reports.length > 0){
            return reports.reduce((p, v) => (p < v.id ? v.id : p), this.state.reports[0].id);
        }
        else
            return 0;
    };

    addReportHandler=()=>{
        this.setState({report:this.state.baseReport});
        this.InvertOpenModal();
    }

    render() {

        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            }
        };

        return (
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Laboratorio</th>
                            <th>Identificador estudio</th>
                            <th>Report actions</th>
                            <th>CIOMS</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderReports()}</tbody>
                </Table>
                <Button onClick={this.addReportHandler} variant="primary">Add Report</Button>
                <Modal style={customStyles} isOpen={this.state.modalOpen} ariaHideApp={false}>
                    <ReportForm report={this.state.report} closeModal={this.InvertOpenModal} onSubmit={this.handleOnSubmit} />
                    <div className="closeDiv">
                        <Button className="closeBtn" onClick={this.InvertOpenModal} variant="primary">Cerrar</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}
