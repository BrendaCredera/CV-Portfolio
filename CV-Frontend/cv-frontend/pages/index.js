import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Graphs from '/pages/components/Graphs.js'
import Footer from '/pages/components/Footer.js'


export default function Home() {
  return (
    <>
      <main className={styles.main}>

        <div className={styles.container}>
          <Graphs />
        </div>

        <Footer/>
        
      </main>
    </>
  )
}
