import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBar, ListItem, List, ListItemText } from "material-ui";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Chip from '@mui/material/Chip';
import handleDelete from '@mui/material/Chip';
//import {  ListItemText } from '@material-ui/core/';


export class Confirm extends Component {
  
  render() {
    const {
      values: {DateAndTime, FloorNo, Location, NameOfOrg, Purpose, MeetingAgenda, ResourcesAvailable, Requirements }, continues,back
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Booking Details" iconClassNameLeft />
          <List>
            <ListItem primaryText="Date and Time" secondaryText={DateAndTime} />
            <ListItem primaryText="Floor Number" secondaryText={FloorNo} />
            <ListItem primaryText="Location" secondaryText={Location} />
            <ListItem primaryText="Name of the Firm" secondaryText={NameOfOrg} />
            <ListItem primaryText="Purpose" secondaryText={Purpose} />
            <ListItem primaryText="MeetingAgenda" secondaryText={MeetingAgenda} />
            <ListItem primaryText="ResourcesAvailable" secondaryText={ResourcesAvailable} />
            <ListItem primaryText="Requirements" secondaryText={Requirements} />

            
          </List>
          <br />
          <ArrowBackIcon
            onClick={back}
            fontSize="large"
            className="nextMenu"
          />
          <ArrowForwardIcon
            onClick={continues}
            fontSize="large"
            className="nextMenu"
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
