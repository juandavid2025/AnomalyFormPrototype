import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/ReportForm.css";

export default class ReportForm extends Component {
    
    constructor({report: {id, lab, protocol, sendDate, labId, period}}){
      super();

      this.state = {
        id,
        lab:{value:lab, correct:false, touched:false},
        protocol:{value:protocol, correct:false, touched:false},
        sendDate:{value:sendDate, correct:false, touched:false},
        labId:{value:labId, correct:false, touched:false},
        period:{value:period, correct:false, touched:false},
      }
    }  

    static getDerivedStateFromProps(props, state){
      if(props.report.id !== state.id){
        let {id, lab, protocol, sendDate, labId, period} = props.report;
        console.log("Date form: "+sendDate);
        return({
          id, 
          lab:{value:lab,correct:false,touched:false}, 
          protocol:{value:protocol,correct:false,touched:false}, 
          sendDate:{value:sendDate,correct:false,touched:false}, 
          labId:{value:labId,correct:false,touched:false}, 
          period:{value:period,correct:false,touched:false}
        });
      }
      return null;
    }

    handleInputChange=(event) =>{
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      const newInput = {...this.state[name]};
      newInput.correct = value.trim()!=="";
      newInput.touched = true;
      newInput.value = value;
      this.setState({[name]:newInput});
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        let report = {
          id: this.state.id,
          lab: this.state.lab.value,
          protocol: this.state.protocol.value,
          sendDate: this.state.sendDate.value,
          labId: this.state.labId.value,
          period: this.state.period.value
        }

        this.props.onSubmit(report);
        this.props.closeModal();
    }

    InputDateChange(date){
      let newInputDate = {...this.state.sendDate, value:date, correct:date!=null, touched:true};

        this.setState({sendDate:newInputDate});
    }
  
    render() {
   
    return (
      <div>
        <h3>Agregar Reporte de Laboratorio</h3>
        <Form onSubmit={ this.handleSubmit }>
          <Form.Group controlId="formBasicLabo">
            <Form.Label>Laboratorio</Form.Label>
            <Form.Control type="text" placeholder="Laboratorio" value={this.state.lab.value} onChange={this.handleInputChange} name="lab" />
            <Alert show={!this.state.lab.correct && this.state.lab.touched} variant="danger">Laboratorio no puede ser vacío</Alert>
          </Form.Group>
          <Form.Group controlId="formBasicProtocol">
            <Form.Label>Protocolo</Form.Label>
            <Form.Control type="text" placeholder="#" value={this.state.protocol.value} onChange={this.handleInputChange} name="protocol" />
            <Alert show={!this.state.protocol.correct && this.state.protocol.touched} variant="danger">Protocolo no puede ser vacío</Alert>
          </Form.Group>
          <Form.Group controlId="formBasicSendDate">
            <Form.Label>Fecha de envío al comité</Form.Label>
            <div></div>
            <DatePicker selected={this.state.sendDate.value} onChange={date=>this.InputDateChange(date)} dateFormat="dd/MM/yyyy" isClearable showYearDropdown scrollableMonthYearDropdown/>
            <Alert show={!this.state.sendDate.correct && this.state.sendDate.touched} variant="danger">Fecha no puede ser vacía</Alert>
          </Form.Group>
          <Form.Group controlId="formBasicLabId">
            <Form.Label>Identificador del estudio</Form.Label>
            <Form.Control type="text" placeholder="------" value={this.state.labId.value} onChange={this.handleInputChange} name="labId" />
            <Alert show={!this.state.labId.correct && this.state.labId.touched} variant="danger">Identificador del estudio no puede ser vacío</Alert>
          </Form.Group>
          <Form.Group controlId="formBasicPeriod">
            <Form.Label>Periodo del estudio</Form.Label>
            <Form.Control type="text" placeholder="dd/mm/aa => dd/mm/aa" value={this.state.period.value} onChange={this.handleInputChange} name="period" />
            <Alert show={!this.state.period.correct && this.state.period.touched} variant="danger">Periodo no puede ser vacío</Alert>
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
