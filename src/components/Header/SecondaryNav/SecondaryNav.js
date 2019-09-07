import React from 'react';

import * as styles from './SecondaryNav.module.css';

export default props => (
  <nav className={styles.SecondaryNav}>
    {props.links.map((link, ndx) => <a href={link.url} key={ndx}>{link.label}</a>)}
  </nav>
 )