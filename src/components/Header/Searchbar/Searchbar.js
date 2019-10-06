import React from 'react';

import * as styles from './Searchbar.module.css';

export default props => (
  <form className={styles.Searchbar}>
    <input type="text" placeholder="What can we help You find?"></input>
  </form>
)