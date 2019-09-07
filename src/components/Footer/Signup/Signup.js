import React from 'react';
import * as styles from './Signup.module.css';

export default props => {
  return (
    <form className={styles.Signup}>
      <input type="text" placeholder="Your Email"></input>
      <button>JOIN</button>
    </form>
  )
}