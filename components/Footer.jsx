import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardB}>
        <h1 className={styles.title}>OPEN SOURCE LEARNERS</h1>
        <h1 className={styles.links}>
          <a href="//" passHref >
          <span className={styles.linkT}>work with us</span>
          <Image
          src="/src/img/link.png"
          width="40px"
          height="40px"
          alt="logo"
          />
          </a>
                
        </h1>
      </div>
      <div className={styles.cardS}>
      <div className={styles.cardItem}>
          open Source Learners <br /> Nigeria
        </div>
        <div className={styles.cardItem}>
          Contact@opls.gmail.com<br /> +234 185 653 08
        </div>
      </div>
      <div className={styles.cardS}>
      <div className={styles.cardItem}>
          FOLLOW US: <br /> _FB _IN _LN _TW _UT
        </div>
        <div className={styles.cardItem}>
          @ 2022 open source Learners<br /> ALL RIGHTS RESERVED
        </div>
      </div>
     
    </div>
  )
}

export default Footer
