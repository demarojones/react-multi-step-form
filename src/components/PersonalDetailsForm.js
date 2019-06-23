import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class PersonalDetailsForm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
      const {values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Enter Personal Details" />
                <TextField hintText="Enter Occupation"
                floatingLabelText = "Occupation"
                onChange = {handleChange('occupation')}
                defaultValue = {values.occupation}
                />
                <br />
                <TextField hintText="Enter City"
                floatingLabelText = "City"
                onChange = {handleChange('city')}
                defaultValue = {values.city}
                />
                <br />
                <TextField hintText="Enter Bio"
                floatingLabelText = "Biography"
                onChange = {handleChange('biography')}
                defaultValue = {values.biography}
                />
                <br />
                <RaisedButton
                    label = "Previous"
                    primary = { false }
                    style = { StyleSheet.button }
                    onClick = { this.back }
                />

                <RaisedButton
                    label = "Continue"
                    primary = { true }
                    style = { StyleSheet.button }
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

export default PersonalDetailsForm
