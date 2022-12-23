import React from 'react'
import Graphs from '/pages/components/Graphs.js'
import styles from '/styles/CvPage.module.css'
import Footer from '/pages/components/Footer.js'
import Header from './components/Header'

const CvPage = () => {
  return (
    <div className={styles.body}>
      <Header/>
        <div>
            <Graphs />  
        </div>
        <Footer/>   
    </div>
  )
}

export default CvPage