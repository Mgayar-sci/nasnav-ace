import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout';

import Header from './components/Header/Header';

import Topbar from './components/Header/Topbar/Topbar';
import Slogin from './components/Header/Slogen/Slogin';
import SecondaryNav from './components/Header/SecondaryNav/SecondaryNav';

import Logo from './components/Header/Logo/Logo';
import Searchbar from './components/Header/Searchbar/Searchbar';
import Button from './components/Header/Button/Button';
import cart from './assets/img/cart.png';

import Headerbar from './components/Header/Headerbar/Headerbar';
import PrimaryNav from './components/Header/PrimaryNav/PrimaryNav';

import Home from './pages/Home/Home';
import Slideshow from './components/Slideshow/Slideshow';
import BackgroundBox from './components/BackgroundBox/BackgroundBox';
import background360 from './assets/img/360-background.jpg';
import Degree360Data from './components/Degree360Data/Degree360Data';
import logo360 from './assets/img/360.png';

import branch1 from './assets/img/branch1.jpg';
import BranchData from './components/BranchData/BranchData';
import branch2 from './assets/img/branch2.jpg';

import Footer from './components/Footer/Footer';
import ProductsList from './components/ProductsList/ProductsList';
import WeDeliver from './components/WeDeliver/WeDeliver';
import ProductAd from './components/ProductAd/ProductAd';

import { getAceData } from './services/ace-service';
import Sidebar from './components/Sidebar/Sidebar';
import MenuIcon from './components/Header/MenuIcon/MenuIcon';


class App extends React.Component {

  state = {
    primaryNav: [],
    secondaryNav: [],
    slideShowNav: [],
    productsData: [],
    footerData: {},
    sidebar: {
      show: true,
      open: false
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
    
    getAceData()
      .then( data => this.setState({...this.state, ...data}) )
      .catch( error => console.log(error) )
  }

  
  render() {
    return (
      <div className="App">
        <Sidebar show={this.state.sidebar.show} open={this.state.sidebar.open} clickHandler={this.sidebarCloseHandler}>
          <PrimaryNav links={this.state.primaryNav} vertical={true} />
        </Sidebar>
        <Header>
          <Topbar>
            <Layout padding={"7px 5px"} spaceBetween={true}>
              <Slogin />
              <SecondaryNav links={this.state.secondaryNav} />
            </Layout>
          </Topbar>
          <Headerbar>
            <Layout padding={"7px 5px"} spaceBetween={true}>
              <Logo />
              <Searchbar />
              <Button label="Shopping Cart" image={cart} height="20px" />
            </Layout>
          </Headerbar>
          <Headerbar>
            <Layout padding={"10px 5px"} spaceBetween={true}>
              <MenuIcon clickHandler={this.menuClickHandler} />
              <PrimaryNav links={this.state.primaryNav} />
            </Layout>
          </Headerbar>
        </Header>
        <Home>
          <Slideshow links={this.state.slideShowNav} />
          <Layout spaceBetween={true}>
            <BackgroundBox bgImage={background360} imageWidth="1140px" imageHeight="259px" imageMargin="26px 0 0">
              <Degree360Data image={logo360} imageHeight="78px" title="360 Degree Shopping Experience" subtitle="Live ACE New Experience" />
            </BackgroundBox>
          </Layout>
          <Layout spaceBetween={true}>
            <BackgroundBox bgImage={branch1} imageWidth="557px" imageHeight="193px" imageMargin="35px 20px 0 0">
              <BranchData title="Sheraton Store" subtitle="Explore" />
            </BackgroundBox>
            <BackgroundBox bgImage={branch2} imageWidth="557px" imageHeight="193px" imageMargin="35px 0 0">
              <BranchData title="Shorouk Store" subtitle="Explore" />
            </BackgroundBox>
          </Layout>
          <Layout>
            <ProductsList productsData={this.state.productsData} />
          </Layout>
          <Layout>
            <WeDeliver />
          </Layout>
          <ProductAd />
        </Home>
        <Footer footerData={this.state.footerData} />
      </div>
    );
  }

  menuClickHandler = () => {
    console.log('menuClickHandler');
    
    this.setState({ sidebar: { ...this.state.sidebar, open: true } });
  }

  sidebarCloseHandler = () => {
    this.setState({ sidebar: { ...this.state.sidebar, open: false } });
  }
}

export default App;
