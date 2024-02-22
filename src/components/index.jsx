import React from "react";
import styles from "./index.module.css";
import group1 from "../assets/group.png";
import apple from '../assets/apple.png';
import GooglePlay from '../assets/google-play.png';
import image from '../assets/image.png';



function Hero() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={group1}  alt="group" />
          <h2>Kreed</h2>
        </div>
        <div className={styles.nav}>
          <ul>
            <li><a href="#">Home </a></li>
            <li> <a href="#">About us</a> </li>
            <li> <a href="#">How it works</a> </li>
            <li> <a href="#">Services</a></li>
            <li> <a href="#">Contact</a></li>
          </ul>
        </div>
        <button className={styles.button}>Get Started</button>
       
      </header>
     <div className={styles.hero}>
     <div className={styles.text}>

      <h3>Connecting all your banking needs</h3>
      <p>A smart mobile application you can control your business needs</p>
      <div className={styles.downloadButton}>
   <button>
     <img src={apple} alt="" /> <span>Download App</span>
     </button>
   <button>
    <img src={GooglePlay} alt="" />   <span> Download App</span>
    </button>
      </div>
      </div>

      <div className={styles.imgHero}>
     <img width="600" src={image} alt="image" />
      </div>
     </div>
    </div>
    
  );
}

export default Hero;
