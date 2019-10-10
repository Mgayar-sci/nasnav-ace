import React from 'react';

import HorizontalLayout from '../../components/HorizontalLayout/HorizontalLayout';

import Slideshow from '../../components/Slideshow/Slideshow';
import BackgroundBox from '../../components/BackgroundBox/BackgroundBox';
import background360 from '../../assets/img/360-background.jpg';
import Degree360Data from '../../components/Degree360Data/Degree360Data';
import logo360 from '../../assets/img/360.png';

import branch1 from '../../assets/img/branch1.jpg';
import BranchData from '../../components/BranchData/BranchData';
import branch2 from '../../assets/img/branch2.jpg';

import WeDeliver from '../../components/WeDeliver/WeDeliver';
import ProductAd from '../../components/ProductAd/ProductAd';

import ProductsList from '../../components/ProductsList/ProductsList';
import ProductItem from '../../components/ProductsList/ProductItem0/ProductItem0';

export default props => {

  let productItem = product => <ProductItem key={product.id}  productData={{ ...product }} />
  
  return (
    <div>
      <Slideshow links={props.slideShowNav} />
      <HorizontalLayout vAlign="spaceBetween">
        <BackgroundBox bgImage={background360} imageWidth="1140px" imageHeight="259px" imageMargin="26px 0 0">
          <Degree360Data image={logo360} imageHeight="78px" title="360 Degree Shopping Experience" subtitle="Live ACE New Experience" />
        </BackgroundBox>
      </HorizontalLayout>
      <HorizontalLayout vAlign="spaceBetween">
        <BackgroundBox bgImage={branch1} imageWidth="557px" imageHeight="193px" imageMargin="35px 20px 0 0">
          <BranchData title="Sheraton Store" subtitle="Explore" />
        </BackgroundBox>
        <BackgroundBox bgImage={branch2} imageWidth="557px" imageHeight="193px" imageMargin="35px 0 0">
          <BranchData title="Shorouk Store" subtitle="Explore" />
        </BackgroundBox>
      </HorizontalLayout>
      <HorizontalLayout vAlign="spaceAround">
        <ProductsList productsData={props.productsData} header="Best Selling products & sales" headerLinkText="view all" productItem={productItem} />
      </HorizontalLayout>
      <HorizontalLayout vAlign="spaceAround">
        <WeDeliver />
      </HorizontalLayout>
      <ProductAd />
      {props.children}
    </div>
  )
};