import React, { Component } from 'react';
import { Form, Button, Alert } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/CIOMForm.css";

export default class CIOMForm extends Component {
    constructor({CIOM:{ id, cod, reportCountry, reportYear, event, ciomState, notiDate }}){
        super();
        this.state={
            id, 
            cod:{value:cod, correct:false, touched:false}, 
            reportCountry:{value:reportCountry, correct:false, touched:false}, 
            reportYear:{value:reportYear, correct:false, touched:false},
            event:{value:event, correct:false, touched:false}, 
            ciomState:{value:ciomState, correct:false, touched:false}, 
            notiDate:{value:notiDate, correct:false, touched:false},

            //-----------Input Validation---------
        }
    }

    static getDerivedStateFromProps(props, state){
        if(props.CIOM.id !== state.id){
          let {id, cod, reportCountry, reportYear, event, ciomState, notiDate} = props.CIOM;
          return({
            id, 
            cod:{value:cod,correct:false,touched:false}, 
            reportCountry:{value:reportCountry,correct:false,touched:false}, 
            reportYear:{value:reportYear,correct:false,touched:false}, 
            event:{value:event,correct:false,touched:false}, 
            ciomState:{value:ciomState,correct:false,touched:false}, 
            notiDate:{value:notiDate,correct:false,touched:false}
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
        newInput.touched=true;
        newInput.value = value;
        this.setState({[name]:newInput});
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        let CIOM = {
          id: this.state.id,
          cod: this.state.cod.value,
          reportCountry: this.state.reportCountry.value,
          reportYear: this.state.reportYear.value,
          event: this.state.event.value,
          ciomState: this.state.ciomState.value,
          notiDate: this.state.notiDate.value
        }

        this.props.onSubmit(CIOM);
        this.props.closeModal();

    }
    
    InputDateChange(date){
        let newInputDate = {...this.state.notiDate, value:date, correct:date!=null, touched:true};

        this.setState({notiDate:newInputDate});
       
    }
    
    render() {

        return (
            <div>
                <h3>Agregar CIOM al Reporte</h3>
                <Form onSubmit={ this.handleSubmit }>
                <Form.Group controlId="formBasicCod">
                    <Form.Label>Código del paciente</Form.Label>
                    <Form.Control type="text" placeholder="código" value={this.state.cod.value} onChange={this.handleInputChange} name="cod" />
                    <Alert show={!this.state.cod.correct && this.state.cod.touched} variant="danger">Código no puede ser vacío</Alert>
                </Form.Group>
                <Form.Group controlId="formBasicRepoCountry">
                    <Form.Label>País del reporte</Form.Label>
                    <Form.Control type="text" placeholder="país" value={this.state.reportCountry.value} onChange={this.handleInputChange} name="reportCountry" />
                    <Alert show={!this.state.reportCountry.correct && this.state.reportCountry.touched} variant="danger">País no puede ser vacío</Alert>
                </Form.Group>
                <Form.Group controlId="formBasicReportYear">
                    <Form.Label>Año del reporte</Form.Label>
                    <Form.Control type="text" placeholder="año" value={this.state.reportYear.value} onChange={this.handleInputChange} name="reportYear" />
                    <Alert show={!this.state.reportYear.correct && this.state.reportYear.touched} variant="danger">Año del reporte no puede ser vacío</Alert>
                </Form.Group>
                <Form.Group controlId="formBasicEvent">
                    <Form.Label>Evento presentado</Form.Label>
                    <Form.Control type="text" placeholder="---" value={this.state.event.value} onChange={this.handleInputChange} name="event" />
                    <Alert show={!this.state.event.correct && this.state.event.touched} variant="danger">Evento no puede ser vacío</Alert>
                </Form.Group>
                <Form.Group controlId="formBasicCiomState">
                    <Form.Label>Estado del CIOM</Form.Label>
                    <Form.Control type="text" placeholder="estado" value={this.state.ciomState.value} onChange={this.handleInputChange} name="ciomState" />
                    <Alert show={!this.state.ciomState.correct && this.state.ciomState.touched} variant="danger">Estado no puede ser vacío</Alert>
                </Form.Group>
                <Form.Group controlId="formBasicNotiDate">
                    <Form.Label>Fecha de notificación</Form.Label>
                    <div></div>
                    <DatePicker selected={this.state.notiDate.value} onChange={date=>this.InputDateChange(date)} dateFormat="dd/MM/yyyy" isClearable showYearDropdown scrollableMonthYearDropdown/>
                    <Alert show={!this.state.notiDate.correct && this.state.notiDate.touched} variant="danger">Fecha no puede ser vacía</Alert>
                </Form.Group>
                <div className="saveDiv">
                    <Button disabled={false} variant="primary" type="submit">
                        Guardar
                    </Button>
                </div>
                </Form>
            </div>
        )
    }

    checkAllCorrect(){
        if(this.state.correctCOD && this.state.correctRepoCountry && this.state.correctRepoYear && this.state.correctEvent && this.state.correctCIOMState && this.state.correctNotiDate){
            this.setState({allCorrectToSave:true});
        }
        else{
            this.setState({allCorrectToSave:false});
        }
    }
}
