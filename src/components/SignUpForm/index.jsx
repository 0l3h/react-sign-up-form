import React, { Component } from 'react';
import styles from './SignUpForm.module.scss';
import classNames from 'classnames';

class SignUpForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    handleChange = ({target: {value, name}}) => {
        this.setState({[name]: value});
    }

    /** Method prevents form from submission 
     * 
     * @param {Event} e 
     */
    preventDefault = e => {
        e.preventDefault();
    }

    /** Checks if the value of the input is valid
     * 
     * @param {String} inputName Name of input 
     * @param {RegExp} pattern Regular expression 
     * @returns 
     */
    isInputValid = (inputName, pattern) => {
        const {valid, invalid} = styles;
        return classNames(pattern.test(this.state[inputName])? valid : invalid);
    }

    render() {
        const namePattern = /^[A-Z][a-z]*$/;
        const emailPattern = /^.*@.*\.com$/;
        const passwordPattern = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

        const {name, email, password} = this.state;

        return (
            <form onSubmit={this.preventDefault}>
                <h1>Sign up</h1>

                <label>
                    Name
                    <input 
                    onChange={this.handleChange} 
                    className={this.isInputValid("name", namePattern)} 
                    type="text" name="name" value={name}/>
                </label>

                <label>
                    Email
                    <input onChange={this.handleChange} 
                    className={this.isInputValid("email", emailPattern)} 
                    type="email" name="email" value={email}/>
                </label>

                <label>
                    Password
                    <input onChange={this.handleChange} 
                    className={this.isInputValid("password", passwordPattern)} 
                    type="password" name="password" value={password}/>
                </label>

                <button type="submit">Sign up</button>
            </form>
        )
    }
}

export default SignUpForm;