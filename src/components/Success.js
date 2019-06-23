import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class UserDetailsForm extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Success" />
            <h1>Thank you for your submission, please lookout for an email with further instructions</h1>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default UserDetailsForm
