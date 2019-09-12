import React from 'react';
import * as styles from './FooterLargeCol.module.css';

export default props => {
  console.log(props.colData);
  return (
    
    <div className={styles.FooterLargeCol} style={{ minWidth: props.colData.minWidth ? props.colData.minWidth : null }}>
      
      {props.colData.header && <h5>{props.colData.header}</h5>}
      <nav>
        {props.colData.links && props.colData.links.map((link, ndx) => <a href="/" key={ndx}>{link.url && <img src={process.env.PUBLIC_URL + link.url}alt="" />}{link.label}</a>)}
        {props.children}
      </nav>
    </div>
  )
}