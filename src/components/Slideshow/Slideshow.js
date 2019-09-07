import React from 'react';

import slideImage1 from '../../assets/img/slideImage1.jpg';


import Layout from '../Layout/Layout';
import Slide from './Slide/Slide';

import * as styles from './Slideshow.module.css';

export default props => (
  <div className={styles.Slideshow}>
    <Layout height="33px" padding={"1px 5px"} right={true}>
      <nav className={styles.navigation}>
        {props.links.map((link, ndx) => <a href={link.url} key={ndx}>{link.label}</a>)}
      </nav>
    </Layout>
    <div className={styles.slides}>
      <Slide title="30% Online Deal!" subtitle="on selected items" image={slideImage1}/>
    </div>
  </div>
)