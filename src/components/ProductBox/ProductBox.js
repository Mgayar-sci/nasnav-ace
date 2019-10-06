import React, { Component } from 'react';

import ProductImages from './ProductImages/ProductImages';
import ProductDetails from './ProductDetails/ProductDetails';

import * as styles from './ProductBox.module.css';

export default class extends Component {

  state = {
    productData: {
      id: null,
      cover_image_url: '',
      name: 'Product Name',
      itemNo: '8017742 | 49830',
      description: 'Product description',
      price: '1',
      oldPrice: '1700',
      rate: 3.5,
      cover_images_url: [
        {
          large: '',
          thumb: ''
        }
      ],
      orderCount: 1
    },
    activePhotoId: 0
  }

  changeMe = (newOrderCount) => {
    this.setState({ ...this.state, productData: { ...this.state.productData, orderCount: newOrderCount } });
  }

  changeActivePhotoId = (newId) => {
    console.log(newId);
    
    this.setState({ ...this.state, activePhotoId: newId });
  }

  render() {
    let defaultProductData = { ...this.state.productData };
    defaultProductData = this.props.productData.id ? { ...defaultProductData, ...this.props.productData } : defaultProductData;
    return (
      <div className={styles.ProductBox}>
        <ProductImages
          productData={defaultProductData}
          changeActivePhotoId={this.changeActivePhotoId}
          activePhotoId={this.state.activePhotoId}
        />
        <ProductDetails productData={defaultProductData} updateOrderCountHandler={this.changeMe} />
      </div>
    );
  }

}
