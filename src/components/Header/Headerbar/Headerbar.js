import React from 'react';

import * as styles from './Headerbar.module.css';

export default props => (
  <div className={styles.Headerbar}>
    {props.children}
  </div>
);