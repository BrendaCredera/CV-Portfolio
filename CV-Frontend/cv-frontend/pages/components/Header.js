import React from 'react'
import styles from '/styles/components/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.gridItem}></div>
            <div className={styles.home}>Home</div> 
            <div className={styles.blogs}>Blog Posts</div>  
            <div className={styles.about}>About Me</div> 
            <div className={styles.fun}>Fun</div> 
        </div>
    </div>
  )
}

export default Header