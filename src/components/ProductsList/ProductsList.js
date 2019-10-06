import React from 'react';

import * as styles from './ProductsList.module.css';
import ProductItem from './ProductItem/ProductItem';

export default props => {
  let headerLink = props.headerLinkText ? (
    <a href="/">{props.headerLinkText}</a>
  ) : null;
  let header = props.header ? (
    <header>
      <h1>{props.header}</h1>
      {headerLink}
    </header>
  ) : null;
  return (
    <div className={styles.ProductsList}>
      {header}
      <div className={styles.productsBox}>
        {props.productsData.map((product, ndx) => <ProductItem key={ndx} {...product} />)}
      </div>
    </div>
  )
}