import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'
const About = ({services}) => {
  return (
    <div className={styles.container}>
       <h1 className={styles.title}> What we Can Do ?</h1>
       <h1 className={styles.subtitle}> Services we can help you With</h1>
      
           

       
    </div>
  )
}

export default About
