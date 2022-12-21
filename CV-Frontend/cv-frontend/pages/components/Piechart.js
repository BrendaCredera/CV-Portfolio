
import React, { useEffect } from 'react'
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'


const Piechart = ({PieData}) => {

  return (
    <div style={{width:'100'}}>
      <Pie data={PieData}/>
    </div> 
  )
}

export default Piechart