import React, { Component } from "react";
import QuestionList from './QuestionList.json'

class Solution extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Questions & Answers</h3>
        </div>
        <div className="panel-body">
          {QuestionList.map(item=><div><br/>
             <h5>{item.question}</h5>
             Answer: {item.correct}</div>)}
        </div>
      </div>
    );
  }
}

export default Solution;