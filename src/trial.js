import React, {Component} from 'react'
import QuestionList from './QuestionList.json'
import Scorebox from './Score'
import Results from './Results'
import {Button, Container, Row, Col} from 'reactstrap'
import Graph from './Output'
import Quiz from './Timer'
import 'bootstrap/dist/css/bootstrap.min.css'
import {HashRouter, Route, NavLink} from 'react-router-dom'
import "./Qapp.css"


class Trial extends Component{
  constructor(props){
    super(props)
    const shuffle = require('shuffle-array')
    const randomData = shuffle(QuestionList)
    this.state = {
      problem: randomData,
      userAnswer: null, //user's answer
      currentProblem: null, 
      currentAccess:null, //holds both question and answer
      totalproblem: randomData.length,
      correctAnswer:null,
      endScore: 0,
      quizEnd: false,
      disabled: true,
      solution: [],
      current: 0, //current question display index
      score: 0,
      end: 0,
      click: 1
    }
  }

  
  componentDidMount(){
    const shuffle = require('shuffle-array')
    this.setState ({currentAccess:this.state.problem[0]})
    this.setState ({currentProblem:this.state.problem[0].question})
    this.setState ({solution:shuffle(this.state.problem[0]['answersList'])})
    this.setState ({correctAnswer:this.state.problem[0]['correct']})
  }

  checkAnswer (answer) {
    this.setState({
      userAnswer: answer,
      disabled:false,
      click: this.state.click+1
    })
    if (answer === this.state.currentAccess.correct && this.state.click ===1) {
      var updatescore = this.state.score+1
      this.setState({score: updatescore})
  }
}

  NextQuestionHandler = () => {
    this.setState({disabled:true, click:1});
    if (this.state.current < this.state.totalproblem-1){
      const shuffle = require('shuffle-array')
      var current = this.state.current+1
      this.setState({current:this.state.current+1})
      this.setState ({currentAccess:this.state.problem[current]})
      this.setState ({currentProblem:this.state.problem[current].question})
      this.setState ({solution:shuffle(this.state.problem[current]['answersList'])})
      this.setState ({correctAnswer:this.state.problem[current]['correct']})
      this.setState({endScore: this.state.score})
      this.setState({end:this.state.current+1})
    }
  }


  finishHandler = () => {
    this.setState({quizEnd:true})
    this.setState({end:this.state.current+1})
    if (this.state.current < this.state.totalproblem){
      this.setState({endScore: this.state.score})
    }
  }


  render(){
  
    if(this.state.current+1 > this.state.totalproblem){
      var scorebox = "";
      var results = <Results {...this.state} />;
    } else {
      var scorebox = <Scorebox {...this.state} />;
      var results = "";

    return(
    <Container className="pt-3 bg-warning" style={{width:"500px"}}>
    <HashRouter>
    {this.state.end < this.state.totalproblem && (
    <div> 
      <Quiz/>
      <Row className="pt-3">
        <Col>{scorebox}</Col>
        <Col>
        <Graph correct={this.state.endScore} incorrect={this.state.totalproblem - this.state.endScore}/>
        </Col>
      </Row>
      <hr/>
    <div className = "question-wrapper">
      <div className = "badge text-center">{this.state.currentProblem}</div>
      <br/>
    </div>
    <div className = "answer-wrapper">
    {this.state.current <= this.state.totalproblem-1 && (
      <div>
        <p><Button className = "answer" onClick={()=>this.checkAnswer(this.state.solution[0])}>{this.state.solution[0]}</Button></p>
        <p><Button className = "answer" onClick={()=>this.checkAnswer(this.state.solution[1])}>{this.state.solution[1]}</Button></p>
        <p><Button className = "answer" onClick={()=>this.checkAnswer(this.state.solution[2])}>{this.state.solution[2]}</Button></p><br/>
      </div>)}
    {results}        
    {this.state.current < this.state.totalproblem - 1 && (
          // Next button only displays if the above is true
          <button
            className="button"
            disabled={this.state.disabled}
            onClick={this.NextQuestionHandler}>
            Next Question
          </button>
        )}
        <NavLink to="/Results">
        {this.state.current === this.state.totalproblem-1  &&  (
          <div>
          <button 
            className="button"
            disabled={this.state.disabled}
            onClick={this.finishHandler}>
            Finish
          </button>
          </div>
        )}
        </NavLink>
        </div>
        </div>)}
        {this.state.quizEnd === true && (
          <div>
          <Route path="/Results" component={()=><Results totalproblem={this.state.totalproblem} endScore={this.state.endScore}/>}/>
          </div>)}
    </HashRouter>
    </Container>
    )
  }
 }
}
export default Trial;
