import React from 'react'
import styles from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle'
import Link from 'next/link'

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-30vh" left="-50vh" />
      <Circle backgroundColor="#01c686"  right="-50vh" bottom="-50vh" />
      <div className={styles.card}>
        <h1 className={styles.title}><span className={styles.brand}>open</span>  source learners</h1> 
        <p className={styles.desc}>
          open source learners is a place where you dont just apply your skills but get to acquire a bunch of new one
        </p>
       
        <button className={styles.button}>Discover</button>
      
        </div> 
      <div className={styles.card}>
        <Image 
          src="/src/img/logo.png"
          width="50%"
          height="50%"
          layout="fill"
          alt="logo"
          objectFit='contain'
        />
        </div> 
       
        
    </div> 
  )
} 

export default Intro
