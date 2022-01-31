import React, { Component } from "react";
import { TextField, AppBar } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {

  render() {
    const { values, handleChange ,continues} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Meeting Details" iconClassNameLeft />
          <TextField
            hintText="Enter Date and Time"
            floatingLabelText="Date and Time"
            onChange={handleChange("DateAndTime")}
            defaultValue={values.DateAndTime}
          />
          <br />
          <TextField
            hintText="Enter FloorNo"
            floatingLabelText="FloorNo"
            onChange={handleChange("FloorNo")}
            defaultValue={values.FloorNo}
          />
          <br />
          <TextField
            hintText="Enter Your Location"
            floatingLabelText="Location"
            onChange={handleChange("Location")}
            defaultValue={values.Location}
          />
          <br />
          <TextField
            hintText="Enter Your NameOfOrg"
            floatingLabelText="NameOfOrg"
            onChange={handleChange("NameOfOrg")}
            defaultValue={values.NameOfOrg}
          />
          <br />
          <TextField
            hintText="Enter Your Purpose"
            floatingLabelText="Purpose"
            onChange={handleChange("Purpose")}
            defaultValue={values.Purpose}
          />
          <br />
          <TextField
            hintText="Enter Your MeetingAgenda"
            floatingLabelText="MeetingAgenda"
            onChange={handleChange("MeetingAgenda")}
            defaultValue={values.MeetingAgenda}
          />
          <br />
          <TextField
            hintText="Enter Your ResourcesAvailable"
            floatingLabelText="ResourcesAvailable"
            onChange={handleChange("ResourcesAvailable")}
            defaultValue={values.ResourcesAvailable}
          />
          <br />
          <TextField
            hintText="Enter Your Requirements"
            floatingLabelText="Requirements"
            onChange={handleChange("Requirements")}
            defaultValue={values.Requirements}
          />
          <br />

          <Button
              color="success"
              variant="contained"
              onClick={continues}
            >Continue</Button>
          
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
