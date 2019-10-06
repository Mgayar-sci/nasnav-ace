import React from 'react';
import ThumbBar from './ThumbBar/ThumbBar';

import * as styles from './ProductImages.module.css';
export default props => (
  <div className={styles.ProductImages}>
    <ThumbBar
      productThumbs={props.productData.id ? props.productData.cover_images_url.map(imgObj => imgObj.thumb) : []}
      clickHandler={props.changeActivePhotoId}
    />
    {
      props.productData.id && <div className={styles.largeImgDiv}><img src={props.productData.cover_images_url[props.activePhotoId].large} alt="" /></div>
    }
  </div>
)