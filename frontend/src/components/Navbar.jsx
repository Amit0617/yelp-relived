import React from 'react'
import styles from '../navbar.module.css'


export default function Navbar() {
  return (
    <div className={styles.header}>
    {/* <h1 className={styles.logo}>Logo</h1> */}
    <input type="checkbox" id={styles.navtoggle} className={styles.navtoggle}/>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <label  className={styles.navtogglelabel}>
      <span></span>
    </label>
  </div>
  )
}
