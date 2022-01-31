import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBar, ListItem, List } from "material-ui";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from '@material-ui/core/Button';
import Chip from '@mui/material/Chip';
import handleDelete from '@mui/material/Chip';

export class Confirm extends Component {
  
  render() {
    const {
      values: { DateAndTime, FloorNo, Location, NameOfOrg, Purpose, MeetingAgenda, ResourcesAvailable, Requirements },
      continues,back
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Details" iconClassNameLeft />
          <List>
            <ListItem primaryText="DateAndTime" secondaryText={DateAndTime} />
            <ListItem primaryText="LFloorNo" secondaryText={FloorNo} />
            <ListItem primaryText="Location" secondaryText={Location} />
            <ListItem primaryText="Name of the Organization" secondaryText={NameOfOrg} />
            <ListItem primaryText="Purpose" secondaryText={Purpose} />
            <ListItem primaryText="Meeting Agenda" secondaryText={MeetingAgenda} />

            <ListItem primaryText="Resources Available" secondaryText={ResourcesAvailable}>
            <Chip label={ResourcesAvailable} color="warning" size="small" onDelete={handleDelete} />
            </ListItem>

            <ListItem primaryText="Requirements" secondary={Requirements} >
            <Chip label={Requirements} color="warning" size="small" onDelete={handleDelete} />
            </ListItem>

          </List>
          <br />
          <Button
              color="primary"
              variant="contained"
              onClick={continues}
            >Confirm</Button>
          
          <Button
            color ="success"
            variant="contained"
            onClick={back}
            >Edit</Button>

        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
