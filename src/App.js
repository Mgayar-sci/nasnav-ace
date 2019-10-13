import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
import SingleCategory from './pages/SingleCategory/SingleCategory';
import SingleBrand from './pages/SingleBrand/SingleBrand';
import Product from './pages/Product/Product';
import Result from './pages/Result/Result';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { getAceData } from './services/ace-service';

class App extends React.Component {

  state = {
    headerData: {
      primaryNav: [],
      secondaryNav: [],
      tertiaryNav: [],
    },
    slideShowNav: [],
    productsData: [],
    footerData: {},
    sidebar: {
      show: true,
      open: false
    }
  }

  componentDidMount() {
    // console.log("componentDidMount");
    getAceData()
      .then(data => this.setState({ ...this.state, ...data }))
      .catch( error => console.log(error) )
  }

  render() {
    console.log()
    return (
      <div className="App">
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <Header
            headerData={this.state.headerData}
            sidebar={this.state.sidebar}
            sidebarToggle={this.sidebarToggle}
          >
          </Header>
          <Switch>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/products/:productId" render={(props) => <Product {...props} productsData={this.state.productsData} />}>
              {/* render={(props) => <Dashboard {...props} isAuthed={true} />} */}
            </Route>
            <Route path="/products">
              <SingleCategory />
            </Route>
            <Route path="/brands">
              <SingleBrand />
            </Route>
            <Route path="/">
              <Home slideShowNav={this.state.slideShowNav} productsData={this.state.productsData} />
            </Route>
          </Switch>
          <Footer footerData={this.state.footerData} />
        </Router>
      </div>
    );
  }

  sidebarToggle = (open) => {
    console.log('sidebarToggle');
    this.setState({ sidebar: { ...this.state.sidebar, open: !open } });
  }

}

export default App;
