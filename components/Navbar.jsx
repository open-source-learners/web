import React from 'react'    
import { useState } from "react";
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Logo from '../public/src/img/logo.png'
import Image from 'next/image'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Link href="/" >
        <Image  src={Logo} alt="logo" className={styles.logo}
         width={35}
         height={35}         
        />
      </Link>
      <ul>
        <li className={styles.listItem}>
          <Link href="/products/Marketing">About us</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/Design">Teams</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/Mobile">Comminity</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/Maintenance">Courses</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/consultant">Blogs</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/Database">Contact</Link>
        </li>
      </ul>
      {/* icon */}
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      {/* start */}
      <ul onClick={()=>setOpen(false)} className={styles.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={styles.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={styles.menuItem}>
        <Link href="/products/Marketing">Marketing</Link>
        </li>
        <li className={styles.menuItem}>
        <Link href="/products/Design">Teams</Link>
        </li>
        <li className={styles.menuItem}>
        <Link href="/products/Mobile">services</Link>
        </li>
        <li className={styles.menuItem}>
        <Link href="/products/Maintenance">Comminity</Link>
        </li>
        <li className={styles.menuItem}>
        <Link href="/products/consultant">Courses</Link>
        </li>
        <li className={styles.menuItem}>
        <Link href="/products/Database">Blogs</Link>
        </li>
      </ul>
      {/* end */}

    </div>

  )
}

export default Navbar
