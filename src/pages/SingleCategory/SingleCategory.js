import React, { Component } from 'react';
import { getAllProductsData, getAllBrandsData } from '../../services/ace-service';
import HorizontalLayout from '../../components/HorizontalLayout/HorizontalLayout';
import ProductFilterColumn from '../../components/ProductFilterColumn/ProductFilterColumn';
import ProductList from '../../components/ProductsList/ProductsList';

import ProductItem from '../../components/ProductsList/ProductItem1/ProductItem1';

import * as styles from './SingleCategory.module.css';

export default class extends Component {

  state = {
    brands: [],
    products: [],
    filters: [],
    totalProducts: 0,
    categoryName: "Keys And Accessories"
  }
  
  componentDidMount() {
    getAllBrandsData()
      .then(data => this.setState({ ...this.state, brands: data }))
      .catch(error => console.log(error))
    getAllProductsData()
      .then(data => this.setState({ ...this.state, products: data.products, totalProducts: data.total}))
      .catch(error => console.log(error))
  }

  applyFilter = (filter) => {
    if (this.state.filters.find(stateFilter => stateFilter.id === filter.id)) {
      this.setState({ ...this.state, filters: this.state.filters.filter(stateFilter => stateFilter.id !== filter.id) });
    } else {
      this.setState({ ...this.state, filters: [...this.state.filters, filter] });
    }
  }

  render() {

    let { products } = this.state;
    products = [...products];
    this.state.filters.forEach(
      filter => {
        products = products.filter(product => product.brand_id === filter.id)
        console.log('filter')
      }
    );

    let findInArray = (id, arr) => arr.find(item => item.id === id);

    let visible_brands = products.reduce((acc, { brand_id }) => {
      return !findInArray(brand_id, acc) ? acc.concat([{
        id: brand_id,
        count: 1,
        name: findInArray(brand_id, this.state.brands) ? findInArray(brand_id, this.state.brands).name : ""
      }]) : acc.map(brand => brand.id !== brand_id ? brand : { ...brand, count: brand.count + 1 })
    }, []);
    
    let productItem = product => <ProductItem key={product.id} productData={{ ...product }} />
    
    return (
      <div className={styles.SingleCategory}>
        <HorizontalLayout vAlign="left" padding="40px 0">
          <h1 className={styles.header}>{this.state.categoryName}</h1>
          <p className={styles.itemsCount}>({this.state.totalProducts} Items Found)</p>
        </HorizontalLayout>
        <HorizontalLayout hAlign="spaceBetween" padding="25px 0">
          <ProductFilterColumn filters={visible_brands} headerText="brand name" clickHandler={this.applyFilter}/>
          <ProductList productsData={products} productItem={productItem} />
        </HorizontalLayout>
      </div>
    )
  }
}
