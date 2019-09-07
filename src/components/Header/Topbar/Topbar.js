import React from 'react';

import * as styles from './Topbar.module.css';

export default props => (
  <div className={styles.Topbar}>{props.children}</div>
);