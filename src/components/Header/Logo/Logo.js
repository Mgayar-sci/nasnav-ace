import React from 'react';

import { Link } from 'react-router-dom';

import aceLogo from '../../../assets/img/ace-logo.png';

import * as styles from './Logo.module.css';

export default props => (
  <Link to='/' className={styles.Logo}>
    <img src={aceLogo} alt="" />
  </Link>
)