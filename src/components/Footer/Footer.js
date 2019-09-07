import React from 'react';
import * as styles from './Footer.module.css';
import Layout from '../Layout/Layout';
import FooterCol from './FooterCol/FooterCol';
import FooterLargeCol from './FooterLargeCol/FooterLargeCol';
import Signup from './Signup/Signup';

import aceLogo2 from '../../assets/img/ace-logo-2.png'
import SocialMedia from './SocialMedia/SocialMedia';
import Copyright from './FooterLargeCol/Copyright/Copyright';
import PoweredBy from './PoweredBy/PoweredBy';

export default props => (
  <div className={styles.Footer}>
    <div className={styles.bar}>
      <Layout padding={0} spaceBetween={true}>
        {props.footerData.topbarCols && props.footerData.topbarCols.map((col, ndx) => <FooterCol key={ndx} colData={col} />)}
        <img src={aceLogo2} alt="" className={styles.logoImg} />
      </Layout>
    </div>
    <div className={styles.bar}>
      <Layout padding={0} spaceBetween={true}>
        {props.footerData.middlebarCols && props.footerData.middlebarCols.map((col, ndx) => <FooterLargeCol key={ndx} colData={col}>
          {ndx === 1 && <Signup />}
          {ndx === 2 && <SocialMedia />}
        </FooterLargeCol>)}
      </Layout>
    </div>
    <div className={styles.bar}>
      <Layout padding={0} spaceBetween={true}>
        <FooterLargeCol colData="">
          <Copyright />
        </FooterLargeCol>
        <FooterLargeCol colData="">
          <PoweredBy />
        </FooterLargeCol>
      </Layout>
    </div>
  </div>
)