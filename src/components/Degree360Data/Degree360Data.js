import React from 'react';

import * as styles from './Degree360Data.module.css';

export default props => (
  <React.Fragment>
    {props.image && <img src={props.image} alt="" style={{ height: props.imageHeight }} className={styles.degree360DataImg}></img>}
    <h1 className={styles.degree360DataH1}>{props.title}</h1>
    <h3 className={styles.degree360DataH3}>{props.subtitle}</h3>
  </React.Fragment>
)