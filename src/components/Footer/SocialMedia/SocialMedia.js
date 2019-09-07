import React from 'react';
import * as styles from './SocialMedia.module.css';
import facebook from '../../../assets/img/facebook.png';
import instagram from '../../../assets/img/instagram.png';
import linkedin from '../../../assets/img/linkedin.png';

export default props => (
  <div className={styles.SocialMedia}>
    <nav>
      <a href="/"><img alt="" src={facebook} /></a>
      <a href="/"><img alt="" src={instagram} /></a>
      <a href="/"><img alt="" src={linkedin} /></a>
    </nav>
  </div>
);