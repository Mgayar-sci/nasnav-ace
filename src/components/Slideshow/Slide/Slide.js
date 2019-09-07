import React from 'react';

import * as styles from './Slide.module.css';

export default props => (
  <div className={styles.Slide} style={{
    backgroundColor: "var(--bg-color-4)",
    backgroundImage: `url(${props.image})`,
    backgroundRepeat: "repeat",
    backgroundPosition: "center top",
    backgroundSize: "1470px 291px"
  }}>
    <h1>{props.title}</h1>
    <h3>{props.subtitle}</h3>
  </div>
)