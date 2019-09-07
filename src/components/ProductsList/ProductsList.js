import React from 'react';

import * as styles from './ProductsList.module.css';
import ProductItem from './ProductItem/ProductItem';

export default props => (
  <div className={styles.ProductsList}>
    <header>
      <h1>Best Selling products & sales</h1>
      <a href="/">view all</a>
    </header>
    <div className={styles.productsBox}>
      {props.productsData.map((product, ndx) => <ProductItem key={ndx} {...product} />)}
    </div>
  </div>
)