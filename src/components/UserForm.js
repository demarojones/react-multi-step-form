import React, { Component } from 'react'
import UserDetailsForm from './UserDetailsForm'
import PersonalDetailsForm from './PersonalDetailsForm';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        biography: ''
    }

    //Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1});
    }

    //Prev Step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1});
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const {step} = this.state;
        const { firstName, lastName, email, occupation, city, biography } = this.state;
        const values = { firstName, lastName, email, occupation, city, biography };

        switch (step) {
            case 1:
                return (<UserDetailsForm nextStep={this.nextStep} 
                    handleChange={this.handleChange}
                    values = {values}
                    />);
            case 2:
                return (<PersonalDetailsForm 
                    nextStep = {this.nextStep } 
                    prevStep = {this.prevStep }
                    handleChange = { this.handleChange }
                    values = { values }
                    />);
            case 3:
                return (<Confirm 
                    nextStep = {this.nextStep } 
                    prevStep = {this.prevStep }
                    handleChange = { this.handleChange }
                    values = { values }
                    />);
            case 4:
                return (<Success />);
        }
  }
}

export default UserForm
