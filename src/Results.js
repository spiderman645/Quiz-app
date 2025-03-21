import React, { Component } from "react";
import Solution from "./Solution";
import Chart from "./Chart";
import "./Qapp.css";
import {Container} from 'reactstrap'

class Results extends Component {
  render() {
    let percent = Number(((this.props.endScore / this.props.totalproblem) * 100).toFixed(1));
    let percentage = Math.round(percent);
    if (percentage > 80) {
      var message = "Awesome Work!";
    } else if (percentage < 80 && percentage > 60) {
      var message = "You Did Ok!";
    } else {
      var message = "Not Good!";
    }
    return (
      <div>
        <Container className="well">
          <div className="pb-3">
          <h4>
            {" "}
            You Got {this.props.endScore} out of {this.props.totalproblem}{" "}
            Correct{" "}
          </h4>
          <h1>
            <Chart correct={percentage} incorrect={100 - percentage} />
            {percentage}% - {message}
          </h1>
          <hr />
          <a href="#solutions" className="btn btn-default btn-success">
            Check Solutions
          </a>{" "}
          <a href="/app" className="btn btn-default">
            Take again
          </a>
        </div>
        </Container>
        <div id="solutions">
          <Solution />
        </div>
      </div>
    );
  }
}

export default Results;

