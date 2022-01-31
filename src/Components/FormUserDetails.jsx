 import React, { Component } from "react";
import { TextField, AppBar } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export class FormUserDetails extends Component {

  render() {
    const { values, handleChange, back ,continues} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Meeting detail" iconClassNameLeft />
          <TextField
            hintText="Enter Your Date And Time"
            floatingLabelText="Date and time"
            onChange={handleChange("DateAndTime")}
            defaultValue={values.DateAndTime}
          />
          <br />
          <TextField
            hintText="Enter Floor Number"
            floatingLabelText="Enter Floor Number"
            onChange={handleChange("FloorNo")}
            defaultValue={values.FloorNo}
          />
          <br />
          <TextField
            hintText="Enter the Location"
            floatingLabelText="Location"
            onChange={handleChange("Location")}
            defaultValue={values.Location}
          />

          <TextField
            hintText="NameOfOrg"
            floatingLabelText="NameOfOrg"
            onChange={handleChange("NameOfOrg")}
            defaultValue={values.NameOfOrg}
          />

          <TextField
            hintText="Purpose"
            floatingLabelText="Purpose"
            onChange={handleChange("Purpose")}
            defaultValue={values.Purpose}
          />

          <TextField
            hintText="MeetingAgenda"
            floatingLabelText="MeetingAgenda"
            onChange={handleChange("MeetingAgenda")}
            defaultValue={values.MeetingAgenda}
          />

          <TextField
            hintText="ResourcesAvailable"
            floatingLabelText="ResourcesAvailable"
            onChange={handleChange("ResourcesAvailable")}
            defaultValue={values.ResourcesAvailable}
          />

          <TextField
            hintText="Requirements"
            floatingLabelText="Requirements"
            onChange={handleChange("Requirements")}
            defaultValue={values.Requirements}
          />

          
          <br />
          <ArrowBackIcon
            onClick={back}
            fontSize="large"
            className="nextMenu"
          />

          <ArrowForwardIcon
            onClick={continues}
            fontSize='large'
            className='nextMenu'
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
