import React from 'react';

import * as styles from './Layout.module.css';

export default props => {
  let inlineStyle = {
    height: props.height
  };
  if (props.padding !== undefined) {
    inlineStyle.padding = props.padding;
  }
  return (
    <div className={[
      styles.Layout,
      props.spaceBetween && styles.spaceBetween,
      props.right && styles.right
    ].join(" ")} style={inlineStyle}> {props.children}</div >
  )
}