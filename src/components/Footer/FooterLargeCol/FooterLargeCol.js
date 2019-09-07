import React from 'react';
import * as styles from './FooterLargeCol.module.css';

export default props => {
  return (
    <div className={styles.FooterLargeCol}>
      
      {props.colData.header && <h5>{props.colData.header}</h5>}
      <nav>
        {props.colData.links && props.colData.links.map((link, ndx) => <a href="/" key={ndx}>{link.icon && <img src={link.icon} alt="" />}{link.label}</a>)}
        {props.children}
      </nav>
    </div>
  )
}