import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "../config/firebase";
import { Card, InputGroup, FormControl, Button, Table } from "react-bootstrap";
import CIOMForm from "../components/CIOMForm";
import Modal from "react-modal";
import {Link} from "react-router-dom";
import "../styles/Report.css";


class Report extends Component {
  constructor() {
    super();
    this.state = {
      report: {id:"", lab: "", protocol:"", sendDate:"", labId:"", period:""},
      CIOMS:[],
      CIOM:{
        id:"", 
        cod:"", 
        reportCountry:"", 
        reportYear:"", 
        event:"", 
        ciomState:"", 
        notiDate:null
      },
      db: firebase.firestore(),
      modalOpen:false,
      baseCIOM:{id:"", cod:"", reportCountry:"", reportYear:"", event:"", ciomState:"", notiDate:null}
    };
  }

  componentDidMount() {
    this.getReportAndCIOMS();
  }

  getReportAndCIOMS(){
    const id = this.props.match.params.id;
    var docRef = this.state.db.collection("reporte").doc("" + id);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          //console.log(doc.data());
          let repor = doc.data();
          repor.sendDate=new Date(repor.sendDate.seconds*1000);
          console.log("date try: "+repor.sendDate.getDate());
          this.setState({report: repor});

          //traer los cioms de esa persona
          console.log("voy a buscar cioms");

            let CIOMS = [];

            this.state.db.collection("reporte").doc(id).collection("sintomas").get().then( querySnapshot =>{
              querySnapshot.forEach( docCiOMS => {
                  console.log(docCiOMS.data());
                  CIOMS.push(docCiOMS.data());
              })
              CIOMS.forEach(ciom => ciom.notiDate=new Date(ciom.notiDate.seconds*1000));
              this.setState({CIOMS});
          } 
          )

        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("error");
      });
  }

  getId = () =>{
    let CIOMS = this.state.CIOMS;
    if(CIOMS.length > 0){
        return CIOMS.reduce((p, v) => (p < v.id ? v.id : p), this.state.CIOMS[0].id);
    }
    else
        return 0;
};

  InvertOpenModal=()=>{
    let value = this.state.modalOpen;
    this.setState({modalOpen: !value});
  }

  handleOnSubmit=(CIOMAdd)=>{
    console.log(CIOMAdd);
    if(CIOMAdd.id === ""){
        let id = parseInt(this.getId()) + 1;
        CIOMAdd.id = id+"";
    }
    this.state.db.collection("reporte").doc(this.state.report.id).collection("sintomas").doc(CIOMAdd.id).set(CIOMAdd);
    this.setVariablesOriginalValues();
    this.getReportAndCIOMS();
  }

  onEdit=(CIOM)=>{
    this.setState({CIOM});
    this.InvertOpenModal();
    this.getReportAndCIOMS();
  }

  onDelete=(CIOMDel)=>{
    this.state.db.collection("reporte").doc(this.state.report.id).collection("sintomas").doc(""+CIOMDel.id).delete();
    this.getReportAndCIOMS();
  }

  renderCIOMS(){
      let CIOMList = this.state.CIOMS.map(( CIOM ) =>(
        <tr key={CIOM.id}>
            <td>{CIOM.id}</td>
            <td>{CIOM.cod}</td>
            <td>{CIOM.reportCountry}</td>
            <td>{CIOM.reportYear}</td>
            <td>{CIOM.event}</td>
            <td>{CIOM.ciomState}</td>
            <td>{CIOM.notiDate+""}</td>
            <td>
                <Button className="actionBtn" variant="warning" onClick={()=> this.onEdit(CIOM)}>
                    Editar
                </Button>
                <Button className="actionBtn" variant="danger" onClick={()=> this.onDelete(CIOM)}>
                    Eliminar
                </Button>
            </td>
        </tr>
    ));

    return CIOMList;
  }

  setVariablesOriginalValues(){
    this.setState({
      id:"", 
      cod:"", 
      reportCountry:"", 
      reportYear:"", 
      event:"", 
      ciomState:"", 
      notiDate:null
    });
  }

  addCIOMHandler=()=>{
    this.setState({CIOM:this.state.baseCIOM});
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
      <div className="RepContainer">
        <Link to={`/`}><p>Back to home</p></Link>
        <Card>
          <Card.Header>Laboratorio <span className="titleSpan">{this.state.report.lab}</span></Card.Header>
          <Card.Body>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Identificador Estudio</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={this.state.report.labId} disabled={true} />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Protocolo</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={this.state.report.protocol} disabled={true} />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Fecha de envío al comité</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={this.state.report.sendDate} disabled={true} />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Periodo</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={this.state.report.period} disabled={true} />
            </InputGroup>
          </Card.Body>
          <Card.Header>Reportes de CIOMS</Card.Header>
          <Card.Body>
            <div className="container">
                  <Table striped bordered hover>
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>Código paciente</th>
                              <th>País reporte</th>
                              <th>Año reporte</th>
                              <th>Evento</th>
                              <th>Estado</th>
                              <th>Fecha notificación</th>
                              <th>CIOMS actions</th>
                          </tr>
                      </thead>
                      <tbody>{this.renderCIOMS()}</tbody>
                  </Table>
                  <Button onClick={this.addCIOMHandler} variant="primary">Add CIOM</Button>
                  <Modal style={customStyles} isOpen={this.state.modalOpen} ariaHideApp={false}>
                      <CIOMForm CIOM={this.state.CIOM} closeModal={this.InvertOpenModal} onSubmit={this.handleOnSubmit} />
                      <div className="closeDiv">
                        <Button className="closeBtn" onClick={this.InvertOpenModal} variant="primary">Cerrar</Button>
                      </div>
                  </Modal>
              </div>
            </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(Report);
