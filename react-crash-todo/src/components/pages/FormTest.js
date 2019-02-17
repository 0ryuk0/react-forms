import React from 'react';
import '../../App.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({formError, ...rest }) => {
    let valid = true;
    // !for-error-empty
    Object.values(formError).forEach(val => 
        val.length > 0 && (valid = false )
    );
    // !field-empty
    Object.values(rest).forEach(val => 
        val===null && (valid=false)
    )
    return valid;
}
class FormTest extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formError: {
                firstName: '',
                lastName:'',
                email:'',
                password:''
            }
        };
    }

    handleSubmit = (e) => {
        debugger
        e.preventDefault();
        if(formValid(this.state)){
            console.log(this.state);
        }else{
            console.error('FORM_ERROR');
        }
    };

    handleChange = (e) => {
        e.preventDefault();
        const { name, value} = e.target;
        const {formError} = this.state;
        console.log(name, value);

        switch(name){
            case 'firstName':
                formError.firstName = value.length < 3 ? 'minimum 3 characters are required' : '';
                break;
            case 'lastName':
                formError.lastName = value.length < 3 ? 'minimum 3 characters are required' : '';
                break;
            case 'email':
                formError.email = emailRegex.test(value)
                ? ""
                : "invalid email address";
              break;
                break;
            case 'password':
                formError.password = value.length < 6 ? 'minimum 6 characters are required' : '';
                break;
        }

        this.setState({formError, [name]: value }, () => console.log(this.state))
    };

    render(){
        const {formError} = this.state;

        return <div className="wrapper">
            <div className="form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            className={formError.firstName.length > 0 ? "error" : ''} 
                            placeholder="First Name"
                            type="text" 
                            name="firstName" 
                            onChange={this.handleChange}
                            noValidate />
                        {formError.firstName.length > 0 && (
                            <span className="errorMessage">{formError.firstName}</span>
                        )} 
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            className={formError.lastName.length > 0 ? "error" : ''} 
                            placeholder="Last Name"
                            type="text" 
                            name="lastName" 
                            onChange={this.handleChange}
                            noValidate />
                        {formError.lastName.length > 0 && (
                            <span className="errorMessage">{formError.lastName}</span>
                        )}
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input 
                            className={formError.email.length > 0 ? "error" : ''} 
                            placeholder="email"
                            type="email" 
                            name="email" 
                            onChange={this.handleChange}
                            noValidate />
                        {formError.email.length > 0 && (
                            <span className="errorMessage">{formError.email}</span>
                        )}   
                    </div>
                    <div className="passowrd">
                        <label htmlFor="password">Password</label>
                        <input 
                            className={formError.password.length > 0 ? "error" : ''} 
                            placeholder="password"
                            type="password" 
                            name="password" 
                            onChange={this.handleChange}
                            noValidate />
                        {formError.password.length > 0 && (
                            <span className="errorMessage">{formError.password}</span>
                        )}
                    </div>
                    <div className="createAccount">
                        <button type="submit">Create Account</button>
                        <small>Already have an account?</small>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default FormTest;