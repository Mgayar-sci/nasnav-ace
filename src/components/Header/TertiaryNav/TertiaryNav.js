import React from 'react';

import * as styles from './TertiaryNav.module.css';

export default props => (
  <nav className={styles.TertiaryNav}>
    {props.links.map((link, ndx) => <a href={link.url} key={ndx}>{link.label}</a>)}
  </nav>
)