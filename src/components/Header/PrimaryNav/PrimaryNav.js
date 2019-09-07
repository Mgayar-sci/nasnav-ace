import React from 'react';

import * as styles from './PrimaryNav.module.css';

export default props => (
  <nav className={styles.PrimaryNav}>
    {props.links.map((link, ndx) => <a href={link.url} key={ndx}>{link.label}</a>)}
  </nav>
 )