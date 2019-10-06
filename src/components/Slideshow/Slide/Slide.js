// import React from 'react';
// import HorizontalLayout from '../../HorizontalLayout/HorizontalLayout';
// import * as styles from './Slide.module.css';

// export default props => (
//   <div className={styles.Slide} style={{
//     height: 
//   }}>
//     <img src={props.image} alt="ad image"></img>
//     {/* <HorizontalLayout > */}
//       <h1>{props.title}</h1>
//       <h3>{props.subtitle}</h3>
//     {/* </HorizontalLayout> */}
//   </div>
// )

import React, { Component } from 'react';
import VerticalLayout from '../../VerticalLayout/VerticalLayout';
import * as styles from './Slide.module.css';

export default class  extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: (window.innerWidth * 500) / 1150 });
  }

  render() {
    return (
      <div
        className={styles.Slide}
        style={{
          height: this.state.height
        }}
      >
        <img src={this.props.image} alt="ad image"></img>
        <div className={styles.slideData}>
          <VerticalLayout vAlign="center" width="100%" padding="10% 0">
            <h1>{this.props.title}</h1>
            <h3>{this.props.subtitle}</h3>
          </VerticalLayout>
        </div>

      </div>
    );
  }




}
