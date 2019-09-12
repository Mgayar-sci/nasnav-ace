import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import * as styles from './MenuIcon.module.css';

export default props => (
  <h3 className={styles.MenuIcon} onClick={props.clickHandler}><FontAwesomeIcon icon={faBars} /></h3>
);
