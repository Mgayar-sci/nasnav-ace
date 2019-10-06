import React from 'react';

import * as styles from './ProductItem.module.css';

import saleItem from '../../../assets/img/sale.png';
import newItem from '../../../assets/img/new.png';
import onlineDealItem from '../../../assets/img/online-deal.png';
import StarRating from '../../StarRating/StarRating';
import { Link } from 'react-router-dom';


export default props => {
  
  return (
    <div className={styles.ProductItem}>
      <Link to={`/products/${props.id}`}>
        {props.saleItem && <img src={saleItem} alt="" className={styles.saleItem} />}
        {props.newItem && <img src={newItem} alt="" className={styles.newItem} />}
        {props.onlineDealItem && <img src={onlineDealItem} alt="" className={styles.onlineDealItem} />}
        <div className={styles.productImgBox}>
          <img src={process.env.PUBLIC_URL + props.cover_image_url} alt={props.cover_image_url} className={styles.productImg} />
        </div>
        <p>{props.name}</p>
        <h5>EGP {props.price}</h5>
        <StarRating rate={props.rate} starWidth={"12px"} />
      </Link>
    </div>
  );
}