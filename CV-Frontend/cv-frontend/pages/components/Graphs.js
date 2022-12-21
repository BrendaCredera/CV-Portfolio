import React from 'react'
import Piechart from '/pages/components/Piechart.js'
import DoughnutChart from '/pages/components/DoughnutChart.js'
import BarChart from '/pages/components/BarChart.js'
import styles from '/styles/Graphs.module.css'

const Graphs = () => {

    const skillData = {
        labels: ['Python','Java','CSS','HTML','Javascript'],
        datasets:[{
          label: 'Skills',
          data:[1,1,1,1,1],
          backgroundColor:['#ab485a','#c9a04e','#f1cfb3','#a08568','#7c8c34']
        }]
      }
    
      const doughnutData = {
        labels: [
          'Research',
          'Team-Player',
          'Tenacity',
          'Leadership',
          'Agile'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [1, 1, 1, 1, 1],
          backgroundColor:['#ab485a','#c9a04e','#f1cfb3','#a08568','#7c8c34'],
          hoverOffset: 4
        }]
      };
    
      const barGraphData = {
        labels: ['Full-Stack','Devops','','','','',''],
        datasets: [{
          label: 'Experiences',
          data: [8, 8],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            '#ab485a',
            '#c9a04e'
          ],
          borderWidth: 1
        }]
      }

  return (
    <div className={styles.body}>
        <header  className={styles.header}>Skills, Experiences and Certifications</header> 

        <div className={styles.gridContainer}>

            <div className={styles.gridItem}>
            <DoughnutChart DoughnutData={doughnutData}/>
            </div>

            <div className={styles.gridItem}>
            <BarChart BarData={barGraphData}/>
            </div>

            <div className={styles.gridItem}>
            <Piechart PieData={skillData}/>
            </div>
        </div>
        <div>Certifications</div>
  </div>
  )
}

export default Graphs