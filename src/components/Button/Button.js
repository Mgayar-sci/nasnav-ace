import React from 'react';

import * as styles from './Button.module.css';

export default props => (
  <button className={ styles.Button }>{props.label && props.label}
    {props.image && <img src={props.image} alt="" style={{height: props.height}}></img>}
  </button>
)