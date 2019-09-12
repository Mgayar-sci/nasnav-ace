import React from 'react';
import * as styles from './Backdrop.module.css';

export default props => (
  <div className={[styles.Backdrop, (!props.show && styles.hide), (props.open && styles.open)].join(" ")} onClick={props.clickHandler}></div>
)