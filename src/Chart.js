import React from "react";
import { Pie } from "react-chartjs-2";

class ChartResult extends React.Component {
  render() {
    const data = {
      labels: ["True", "False"],
      datasets: [
        {
          label: "Result",
          backgroundColor: ["#2DC84D", "#D30018"],
          hoverBackgroundColor: ["#0DB14B", "#E03C31"],
          data: [this.props.correct, this.props.incorrect]
        }
      ]
    };
    return (
      <div>
        <Pie
          data={data}
          options={{
            title: {
              display: true,
              text: 'Result',
              fontSize: 20
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}

export default ChartResult;