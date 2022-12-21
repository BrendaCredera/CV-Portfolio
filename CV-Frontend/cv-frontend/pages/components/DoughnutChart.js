import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'


const DoughnutChart = ({DoughnutData}) => {
  return (
    <div style={{width:'100'}}>
    <Doughnut data={DoughnutData}/>
  </div> 
  )
}

export default DoughnutChart