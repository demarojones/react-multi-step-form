import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class UserDetailsForm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
      const {values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Enter User Details" />
            <TextField hintText="Enter first namne"
                floatingLabelText = "First Name"
                onChange = {handleChange('firstName')}
                defaultValue = {values.firstName}
                />
                <br />
                <TextField hintText="Enter last namne"
                floatingLabelText = "Last Name"
                onChange = {handleChange('lastName')}
                defaultValue = {values.lastName}
                />
                <br />
                <TextField hintText="Enter email"
                floatingLabelText = "Email"
                onChange = {handleChange('email')}
                defaultValue = {values.email}
                />
                <br />
                <RaisedButton
                    label = "Continue"
                    primary = {true}
                    style = {StyleSheet.button}
                    onClick = { this.continue }
                />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const StyleSheet = {
    button: {
        margin: 15
    }
}

export default UserDetailsForm
