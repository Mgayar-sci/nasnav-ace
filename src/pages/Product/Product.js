import React, { Component } from 'react';
import { getProductData } from '../../services/ace-service';

import HorizontalLayout from '../../components/HorizontalLayout/HorizontalLayout';

import ProductBox from '../../components/ProductBox/ProductBox';

import ProductsList from '../../components/ProductsList/ProductsList';

import ProductAd from '../../components/ProductAd/ProductAd';
import ProductOverview from '../../components/ProductOverview/ProductOverview';


export default class  extends Component {

  state = {
    productData: {
      id: undefined
    }
  }

  componentDidMount() {
    // console.log("componentDidMount");
    getProductData(this.props.match.params.productId)
      .then(data => this.setState({ ...this.state, productData: data }))
      .catch(error => console.log(error))
  }


  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (parseInt(this.props.match.params.productId) !== this.state.productData.id) {
      getProductData(this.props.match.params.productId)
        .then(data => this.setState({ ...this.state, productData: data }))
        .catch(error => console.log(error))
    }
  }

  render() {
    
    return (
      <div>
        <HorizontalLayout vAlign="spaceAround">
          <ProductBox productData={this.state.productData} />
        </HorizontalLayout>
        <HorizontalLayout vAlign="spaceAround">
          <ProductOverview productDescription={this.state.productData.description || []} />
        </HorizontalLayout>
        <HorizontalLayout vAlign="spaceAround">
          <ProductsList productsData={this.props.productsData} header="You may also like" styleId={0} />
        </HorizontalLayout>
        <ProductAd />
      </div>
    );
  }
}
