import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    DateAndTime : '',
    FloorNo : '',
    Location: '',
    NameOfOrg : '',
    Purpose: '',
    MeetingAgenda: '',
    ResourcesAvailable: '',
    Requirements: '',
  };

  // Proceed to next step
  continues = (e) => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  back = (e) => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { DateAndTime, FloorNo, Location, NameOfOrg, Purpose, MeetingAgenda, ResourcesAvailable, Requirements} = this.state;
    const values =  { DateAndTime, FloorNo, Location, NameOfOrg, Purpose, MeetingAgenda, ResourcesAvailable, Requirements};

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            continues={this.continues}
          />
        );
      // case 2:
      //   return (
      //     <FormPersonalDetails
      //       nextStep={this.nextStep}
      //       prevStep={this.prevStep}
      //       handleChange={this.handleChange}
      //       values={values}
      //       back={this.back}
      //       continues={this.continues}
      //     />
      //   );
      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            back={this.back}
            continues={this.continues}
          />
        );
      case 3:
        return <Success />;
    }
  }
}

export default UserForm;