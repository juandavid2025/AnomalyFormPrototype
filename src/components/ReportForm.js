import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/ReportForm.css";

export default class ReportForm extends Component {
    
    constructor({report: {id, lab, protocol, sendDate, labId, period}}){
      super();

      this.state = {
        id,
        lab,
        protocol,
        sendDate,
        labId,
        period,
        //selectedDate:null
      }
    }  

    static getDerivedStateFromProps(props, state){
      if(props.report.id !== state.id){
        let {id, lab, protocol, sendDate, labId, period} = props.report;
        return({
          id, 
          lab, 
          protocol, 
          sendDate, 
          labId, 
          period
        });
      }
      return null;
    }

    handleInputChange=(event) =>{
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        let report = {
          id: this.state.id,
          lab: this.state.lab,
          protocol: this.state.protocol,
          sendDate: this.state.sendDate,
          labId: this.state.labId,
          period: this.state.period
        }

        this.props.onSubmit(report);
        this.props.closeModal();

        this.setState({
          id: "",
          lab: "",
          protocol: "",
          sendDate: null,
          labId: "",
          period: ""
        })
    }

    InputDateChange(date){
      //console.log("Date:" + date);
      this.setState({sendDate:date});
    }
  
    render() {
   
    return (
      <div>
        <h3>Agregar Reporte de Laboratorio</h3>
        <Form onSubmit={ this.handleSubmit }>
          <Form.Group controlId="formBasicLabo">
            <Form.Label>Laboratorio</Form.Label>
            <Form.Control type="text" placeholder="Laboratorio" value={this.state.lab} onChange={this.handleInputChange} name="lab" />
          </Form.Group>
          <Form.Group controlId="formBasicProtocol">
            <Form.Label>Protocolo</Form.Label>
            <Form.Control type="text" placeholder="#" value={this.state.protocol} onChange={this.handleInputChange} name="protocol" />
          </Form.Group>
          <Form.Group controlId="formBasicSendDate">
            <Form.Label>Fecha de envío al comité</Form.Label>
            <div></div>
            <DatePicker selected={this.state.sendDate} onChange={date=>this.InputDateChange(date)} dateFormat="dd/MM/yyyy" isClearable showYearDropdown scrollableMonthYearDropdown/>
          </Form.Group>
          <Form.Group controlId="formBasicLabId">
            <Form.Label>Identificador del estudio</Form.Label>
            <Form.Control type="text" placeholder="------" value={this.state.labId} onChange={this.handleInputChange} name="labId" />
          </Form.Group>
          <Form.Group controlId="formBasicPeriod">
            <Form.Label>Periodo del estudio</Form.Label>
            <Form.Control type="text" placeholder="dd/mm/aa => dd/mm/aa" value={this.state.period} onChange={this.handleInputChange} name="period" />
          </Form.Group>
          <div className="saveDiv">
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
