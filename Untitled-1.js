import React, { Component } from "react";
class ScheduleInterview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interviewerName: "",
      intervieweeInfo: {
        intervieweeName: "",
        intervieweeAge: "",
        intervieweeAddress: {
          city: "",
          street: {
            streetName: "",
            streetNumber: "",
          },
        },
      },
    };
  }

  handleInputChange = (e) => {
    switch (e.target.name) {
      case "interviewer-name":
        this.setState({
          interviewerName: e.target.value,
        });
        break;
      case "interviewee-name":
        this.setState({
          intervieweeInfo: {
            ...this.state.intervieweeInfo,
            intervieweeName: e.target.value,
          },
        });
        break;
      case "interviewee-city":
        this.setState({
          intervieweeInfo: {
            ...this.state.intervieweeInfo,
            intervieweeAddress: {
              ...this.state.intervieweeAddress,
              city: e.target.value,
            },
          },
        });
        break;
      case "interviewee-street-name":
        this.setState({
          intervieweeInfo: {
            ...this.state.intervieweeInfo,
            intervieweeAddress: {
              ...this.state.intervieweeAddress,
              street: {
                ...this.state.intervieweeInfo.intervieweeAddress.street,
                streetName: e.target.value,
              },
            },
          },
        });
        break;
      case "interviewee-street-number":
        this.setState({
          intervieweeInfo: {
            ...this.state.intervieweeInfo,
            intervieweeAddress: {
              ...this.state.intervieweeAddress,
              street: {
                ...this.state.intervieweeInfo.intervieweeAddress.street,
                streetNumber: e.target.value,
              },
            },
          },
        });
        break;
      default:
        return this.state;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="mx-3 w-50 d-flex flex-column my-3">
        <label className="d-block">Interviewer Name:</label>
        <input name="interviewer-name" onChange={this.handleInputChange} />
        <label className="d-block"> Interviewee Name</label>
        <input name="interviewee-name" onChange={this.handleInputChange} />
        <label className="d-block">Interviewee City</label>
        <input name="interviewee-city" onChange={this.handleInputChange} />
        <label className="d-block">Interviewee street Name</label>
        <input
          name="interviewee-street-name"
          onChange={this.handleInputChange}
        />
        <label className="d-block">Interviewee street Number</label>
        <input
          type="number"
          name="interviewee-street-number"
          onChange={this.handleInputChange}
        />
        <button
          onClick={this.handleSubmit}
          className="my-2 d-block btn-primary"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default ScheduleInterview;
