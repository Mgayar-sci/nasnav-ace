import React from 'react';

import * as styles from './ProductItem.module.css';

import star from '../../../assets/img/star.png';
import halfStar from '../../../assets/img/half-star.png';

import saleItem from '../../../assets/img/sale.png';
import newItem from '../../../assets/img/new.png';
import onlineDealItem from '../../../assets/img/online-deal.png';


export default props => {

  let rating = Array(Math.floor(props.rate)).fill("").map((item, ndx) => <img src={star} alt="" key={ndx} />);
  rating = rating.length < props.rate ? rating.concat(<img src={halfStar} alt="" key={Math.ceil(props.rate)}/>) : rating;
  return (
    <div className={styles.ProductItem}>
      {props.saleItem && <img src={saleItem} alt="" className={styles.saleItem} />}
      {props.newItem && <img src={newItem} alt="" className={styles.newItem} />}
      {props.onlineDealItem && <img src={onlineDealItem} alt="" className={styles.onlineDealItem} />}
      <div className={styles.productImgBox}>
        <img src={process.env.PUBLIC_URL + props.url} alt="" className={styles.productImg} />
      </div>
      <p>{props.label}</p>
      <h5>EGP {props.price}</h5>
      <div className={styles.rating}>{
        rating
      }</div>
    </div>
  );
}