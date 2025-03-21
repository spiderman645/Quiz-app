import React, { Component } from "react";

class Scorebox extends Component {
  render() {
    return (
      <div className="well">
        Question {this.props.current+1} out of {this.props.totalproblem}
        <br />
        <span className="pull-right">
          <strong>Score: {this.props.endScore}</strong>
        </span>
      </div>
    );
  }
}

export default Scorebox;