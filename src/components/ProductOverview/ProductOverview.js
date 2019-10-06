import React from 'react';

import * as styles from './ProductOverview.module.css';


export default props => (
  <div className={styles.ProductOverview}>
    <h3>Product Overview</h3>
    {props.productDescription.map((p, ndx) => <p key={ndx}>{p}</p>)}
  </div>
)