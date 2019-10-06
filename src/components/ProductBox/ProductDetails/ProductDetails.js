import React from 'react';
import StarRating from '../../StarRating/StarRating';
import Counter from './Counter/Counter';
import HorizontalLayout from '../../HorizontalLayout/HorizontalLayout';

import * as styles from './ProductDetails.module.css';

import redTruck from '../../../assets/img/red-truck.png';

export default props => {
  let productInfo = props.productData.id ? (
    <React.Fragment>
      <h5 className={styles.productName}>{props.productData.name}</h5>
      <p>Item no: {props.productData.itemNo}</p>
      <StarRating rate={props.productData.rate} starWidth={"18px"} />
      <div className={styles.reviewLinks}>
        <a href={"/products/" + props.productData.id}>Read 117 Reviews</a>
        <span> | </span>
        <a href={"/products/" + props.productData.id}>Write Review</a>
      </div>
      <p className={styles.oldPrice}>{props.productData.oldPrice} EGP</p>
      <h3 className={styles.price}>{props.productData.price} <span>EGP</span></h3>
      <Counter orderCount={props.productData.orderCount} onChangeHandler={props.updateOrderCountHandler} />
      <div className={styles.buttonsContainer}>
        <button className={styles.buttons}>Add to Cart</button>
        <button className={styles.buttons}>Add to Wishlist</button>
      </div>
      <hr />
      <h5 className={styles.deliveryTitle}> <img src={redTruck} alt="red truck"/>Delivery From Store</h5>
      <p className={styles.deliveryText}>Free Delivery for Ace Rewards members on qualifing order of 500 EGP or more. See Details.</p>
      <p className={styles.deliveryText}>Delivery Distance varies by store. Check my delivery Address.</p>
    </React.Fragment>
  ) : null;

  return (
  <div className={styles.ProductDetails}>
      {
        productInfo
      }
  </div>
  )
}