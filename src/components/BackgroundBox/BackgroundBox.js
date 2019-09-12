import React from 'react';
import * as styles from './BackgroundBox.module.css';

export default props => (
  <div style={{
    maxWidth: props.imageWidth,
    height: props.imageHeight,
    margin: props.imageMargin,
    backgroundImage: `url(${props.bgImage})`,
    backgroundSize: props.imageWidth + " " + props.imageHeight
  }} className={styles.BackgroundBox}>{props.children}</div>
)