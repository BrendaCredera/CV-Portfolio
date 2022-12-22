import React from 'react'
import Graphs from '/pages/components/Graphs.js'
import styles from '/styles/CvPage.module.css'
import Publications from './components/Publications'

const CvPage = () => {
  return (
    <div>
        <div className={styles.container}>
            <Graphs />
        </div>   
    </div>
  )
}

export default CvPage