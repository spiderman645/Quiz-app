import React, {Component} from 'react'
import { Doughnut } from 'react-chartjs-2'


class Graph extends Component{
  render(){
    const data = {
labels: ['Correct','Incorrect'],
datasets: [
  {
label: 'Final Evaluation',
backgroundColor: ['red','gray'],
data: [this.props.correct,this.props.incorrect],
borderColor: 'gray',
borderWidth: 1
  }]
    }
    return(
      <div><Doughnut data={data} height={45}
      options={{
legend:{display:false},
        maintainAspectRation:false,}}/></div>
    )
  }
}
export default Graph;