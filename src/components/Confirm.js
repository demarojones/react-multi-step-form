import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class UserDetailsForm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
      const {values: { firstName, email, lastName, occupation, city, biography} } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Confirm User Information" />
           <List>
               <ListItem 
                primaryText="First Name"
                secondaryText={firstName} />
                <ListItem 
                primaryText="Last Name"
                secondaryText={lastName} />

                <ListItem 
                    primaryText="Email"
                    secondaryText={email} />

                <ListItem 
                    primaryText="Occupation"
                    secondaryText={occupation} />

                <ListItem 
                    primaryText="City"
                    secondaryText={city} />

                <ListItem 
                    primaryText="Bio"
                    secondaryText={biography} />
            </List>
                <br />
                <RaisedButton
                    label = "Previous"
                    primary = { false }
                    style = { StyleSheet.button }
                    onClick = { this.back }
                />

                <RaisedButton
                    label = "Confirm & Continue"
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
