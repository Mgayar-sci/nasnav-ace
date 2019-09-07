import React from 'react';
import * as styles from './FooterCol.module.css';

export default props => {
  return (
    <div className={styles.FooterCol}>
      <h5>{props.colData.header}</h5>
      <nav>
        {props.colData.links.map((link, ndx) => <a href="/" key={ndx}>{link}</a>)}
      </nav>
    </div>
  )
}