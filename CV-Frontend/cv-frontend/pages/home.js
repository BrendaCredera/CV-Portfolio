import React from 'react'
import styles from '/styles/homePage.module.css'
import Header from './components/Header'

const HomePage = () => {
  return (
    <div className={styles.body}>
      <Header/>
    </div>
  )
}

export default HomePage