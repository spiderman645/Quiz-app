import React, {useEffect, useState} from 'react'
import {Progress} from 'reactstrap'

function Timer(props){
  const {time} = props;
  return(
    <div className = "container">
      <div className = "text-center">
        {time===0?"Time's up": time+" seconds"}
      <Progress value={100-time}/>
      </div>
    </div>
  );
}

function Quiz(props){
  const [time, setTime] = useState(100) //remaining time
  const [active, setActive] = useState(true)

  useEffect(()=>{
    if (time===0) {
      setActive(false);
    }
    if (active&&time!==0){
    setTimeout(()=>{
      setTime(time-1);
    }, 1000);}
  }, [time]);
  return(
    <div className ="container">
      <div className = "row">
        <div className = "col-12">
          <Timer time={time} />
        </div>
      </div>
    </div>
  )
}
export default Quiz;