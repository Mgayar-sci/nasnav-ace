import React, { Component } from 'react';
import { getAllProductsData, getAllBrandsData } from '../../services/ace-service';
import HorizontalLayout from '../../components/HorizontalLayout/HorizontalLayout';
import VerticalLayout from '../../components/VerticalLayout/VerticalLayout';
import ProductFilterColumn from '../../components/ProductFilterColumn/ProductFilterColumn';
import ProductList from '../../components/ProductsList/ProductsList';


import * as styles from './Result.module.css';

export default class extends Component {

  state = {
    banner: { width: 0, height: 0},
    brands: [],
    products: [],
    filters: [],
    totalProducts: 0,
    categoryName: "Keys And Accessories"
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    getAllBrandsData()
      .then(data => this.setState({ ...this.state, brands: data }))
      .catch(error => console.log(error))
    getAllProductsData()
      .then(data => this.setState({ ...this.state, products: data.products, totalProducts: data.total}))
      .catch(error => console.log(error))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ ...this.state, banner: { width: window.innerWidth, height: (window.innerWidth * 350) / 1150} });
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
        
    return (
      <div className={styles.Result}>
        <div className={styles.banner}
          style={{
            height: this.state.banner.height
          }}
        >
          <img src='/img/banner.jpg' alt="banner"></img>
          <div className={styles.bannerData}>
            <VerticalLayout vAlign="center" width="100%" padding="10% 0">
              <h1>hello</h1>
              <h3>({this.state.totalProducts} Items Found)</h3>
            </VerticalLayout>
          </div>
        </div>
        <HorizontalLayout hAlign="spaceBetween" padding="25px 0">
          <VerticalLayout minWidth="275px">
            <ProductFilterColumn filters={visible_brands} headerText="Category name" clickHandler={this.applyFilter} />
            <ProductFilterColumn filters={visible_brands} headerText="brand name" clickHandler={this.applyFilter} />
          </VerticalLayout>
          <ProductList productsData={products} styleId={2}/>
        </HorizontalLayout>
      </div>
    )
  }
}
