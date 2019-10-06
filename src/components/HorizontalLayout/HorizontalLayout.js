import React from 'react';

import * as styles from './HorizontalLayout.module.css';

export default props => {
  let defaultProps = {
    width: '1140px',
    height: 'auto',
    padding: '0',
    margin: '0 auto',
    flexGrow: '0',
    hAligh: 'left',
    vAlign: 'top'
  };

  let inlineStyle = {
    maxWidth: props.width || defaultProps.width,
    height: props.height || defaultProps.height,
    padding: props.padding || defaultProps.padding,
    margin: props.margin || defaultProps.margin,
    flexGrow: props.flexGrow || defaultProps.flexGrow
  };
  return (
    <div className={[
      styles.HorizontalLayout,
      props.hAligh ? styles[props.hAligh] : styles[defaultProps.hAligh],
      props.vAlign ? styles[props.vAlign] : styles[defaultProps.vAlign]
    ].join(" ")} style={inlineStyle}> {props.children}</div >
  )
}