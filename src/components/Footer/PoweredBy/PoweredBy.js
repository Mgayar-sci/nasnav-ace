import React from 'react';
import * as styles from './PoweredBy.module.css';
import nasorg from '../../../assets/img/nasnav.png';
export default props => (
  <div className={styles.PoweredBy}>
    <p>POWERED BY <img src={nasorg} alt="" /> </p>
  </div>
);