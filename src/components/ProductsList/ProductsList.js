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
      <div className={[styles.productsBox, styles[`style${props.styleId || 0}`]].join(" ")}>
        {/* {props.productsData.map(props.productItem)} */}
        {props.productsData.map(product => <ProductItem key={product.id} productData={{ ...product }} styleId={props.styleId}/>)}
        {/* props.styleId */}
      </div>
    </div>
  )
}