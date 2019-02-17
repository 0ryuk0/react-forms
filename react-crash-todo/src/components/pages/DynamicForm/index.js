import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './form.css';
import {Container,Row,Col} from 'react-bootstrap';

export default class index extends Component {
    
    constructor(props){
        super(props);
    };

    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.props.handleSubmit) this.props.handleSubmit(this.state);
        console.log(e);
    }

    handleChange =(e) => {
        e.preventDefault();
    }

    handleCancel = (e) => {
        e.preventDefault();
    }

    renderForm = () => {
        console.log(this.props);
        const {form} = this.props.model;
        let formField, formUI;
        formUI = form.map((row) => {
             formField = row.map((field) => {
                switch (field['field']){
                    case 'label':
                        return ( 
                            <React.Fragment key={`fr${field.id}`}>
                                <label id={field.id} name={field.name} className={field.class}>
                                    <span>{field.label}</span> <span>{field.value}</span>
                                </label>
                            </React.Fragment>
                        );
                        break;
                    case 'checkbox':
                        return (
                            <React.Fragment key={`fr${field.id}`}>
                                <label id={`lbl${field.id}`} htmlFor={field.id} className={field.class}>
                                    <input id={field.id} name={field.name} type="checkbox" onChange={ this.handleChange }/> 
                                    <span>{field.label}</span>
                                </label>
                            </React.Fragment>
                        );
                        break;
                    case 'select':
                        return (
                            <React.Fragment key={`fr${field.id}`}>
                                <select id={field.id} name={field.name} value={field.placeholder} onChange={this.handleChange} className={field.class} disabled={field.disabled}>
                                    <option key="" value=" ">{field.placeholder}</option>
                                    {field.options.map((option) => 
                                        <option key={option.key}>{option.value}</option>
                                    )}
                                </select>
                            </React.Fragment>
                        );
                        break;
                    case 'text':
                        return (
                            <React.Fragment key={`fr${field.id}`}>
                                <input id={field.id} name={field.name} className={field.class} type={field.type} placeholder={field.placeholder} onChange={this.handleChange} disabled={field.disabled}></input>
                            </React.Fragment>
                        );
                        break;
                    case 'heading':
                        return (
                            <React.Fragment key={`fr${field.id}`}>
                                <p id={field.id} name={field.name} className={field.class}>{field.label}</p>
                            </React.Fragment>
                        );
                        break;
                    case 'grid':
                        return (
                            <React.Fragment key={`fr${field.id}`}>
                                <Container>
                                    <Row className={field.header.class}>
                                        {field.header.columnDef.map((column) => 
                                            <React.Fragment key={`fr${column.id}`}>
                                                <Col>{column.label}</Col>
                                            </React.Fragment>
                                        )}
                                    </Row>
                                        {field.rowData.map((data) => 
                                            <React.Fragment key={`fr${data.id}`}>
                                                <Row className={field.rowClass}>
                                                    <Col>{data.comment}</Col>
                                                    <Col>{data.sid}</Col>
                                                    <Col>{data.assignedTo}</Col>
                                                    <Col>{data.updatedStatus}</Col>
                                                    <Col>{data.updatedBy}</Col>
                                                </Row>
                                            </React.Fragment>
                                        )}
                                </Container>
                            </React.Fragment>
                        );  
                        break;
                    case 'textArea':
                        return (
                            <React.Fragment key={`fr${field.id}`}>
                                <textarea id={field.id} name={field.name} className={field.class} placeholder={field.placeholder} onChange={this.handleChange} disabled={field.disabled}></textarea>
                            </React.Fragment>
                        );
                        break;
                    default:
                        return (<div key={`error${field.id}`}>We have failed!!</div>)
                }
            })
            return formField;
        });
        console.log(formUI);
        let finalEl = formUI.map(el => el);
        return finalEl;
    };

    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <form id="csw-commentary" onSubmit={this.handleSubmit} noValidate>
                        {this.renderForm()}
                        <div className="cmt-btn-main">
                            <button id="btnCancel" name="btnCancel" onClick={this.handleCancel}>Cancel</button>
                            <button id="btnSubmit" type="submit" name="btnSubmit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };

}
