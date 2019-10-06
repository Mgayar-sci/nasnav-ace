import React from 'react';

import * as styles from './Thumb.module.css';

export default props => (

  <div className={styles.Thumb} onClick={props.clickHandler}>
    <img src={props.imgUrl} alt="" />
  </div>
)