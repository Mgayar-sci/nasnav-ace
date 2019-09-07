import React from 'react';
import * as styles from './WeDeliver.module.css';
import truck from '../../assets/img/truck.png'
export default props => (
  <div className={styles.WeDeliver}>
    <h1><img src={truck} alt="" /> We Deliver</h1>
    <h3>Free delivery for orderes of EGP 500 or more in Cairo</h3>
    <button>Shop Now</button>
    <button>Learn More</button>

  </div>
);