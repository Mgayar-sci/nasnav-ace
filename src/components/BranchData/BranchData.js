import React from 'react';

import * as styles from './BranchData.module.css';

export default props => (
  <React.Fragment>
    <h1 className={styles.BranchDataH1}>{props.title}</h1>
    <h3 className={styles.BranchDataH3}>{props.subtitle}</h3>
  </React.Fragment>
)