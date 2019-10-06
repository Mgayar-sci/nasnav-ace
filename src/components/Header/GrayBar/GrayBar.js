import React from 'react';

import * as styles from './GrayBar.module.css';

export default props => (
  <div className={styles.GrayBar}>{props.children}</div>
);