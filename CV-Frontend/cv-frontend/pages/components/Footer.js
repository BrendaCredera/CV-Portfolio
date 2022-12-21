import React from 'react'
import styles from '/styles/Footer.module.css'
import { useState } from 'react'

const Footer = () => {
    const [clicked, clickedState] = useState(false)

    const handleClick = () =>{
        clickedState(!clicked)
        console.log(clicked)
    }

  return (
      
    <div className={styles.footer} onClick={handleClick}>
        <div className={clicked? styles.expanded: styles.minimised}>
            Experience
        </div>
        
    </div>
  )
}

export default Footer