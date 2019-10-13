import React from 'react';

import * as styles from './ProductItem.module.css';

import saleItem from '../../../assets/img/sale.png';
import newItem from '../../../assets/img/new.png';
import onlineDealItem from '../../../assets/img/online-deal.png';
import StarRating from '../../StarRating/StarRating';
import { Link } from 'react-router-dom';


export default props => {

  let productData = {
    id: "",
    cover_image_url: "",
    name: "",
    price: 0,
    rate: 3.5
  }

  productData = { ...productData, ...props.productData}
  
  return (
    <div className={[styles.ProductItem, styles[`style${props.styleId || 0}`]].join(" ")}>
      <Link to={`/products/${productData.id}`}>
        {productData.saleItem && <img src={saleItem} alt="" className={styles.saleItem} />}
        {productData.newItem && <img src={newItem} alt="" className={styles.newItem} />}
        {productData.onlineDealItem && <img src={onlineDealItem} alt="" className={styles.onlineDealItem} />}
        <div className={styles.productImgBox}>
          <img src={process.env.PUBLIC_URL + productData.cover_image_url} alt={productData.cover_image_url} className={styles.productImg} />
        </div>
        <p>{productData.name}</p>
        <h5>EGP {productData.price}</h5>
        <StarRating rate={productData.rate} starWidth={"12px"} />
      </Link>
    </div>
  );
}
