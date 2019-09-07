import React from 'react';


export default props => (
  <div style={{
    width: props.imageWidth,
    height: props.imageHeight,
    margin: props.imageMargin,
    color: "var(--text-color-4)",
    backgroundImage: `url(${props.bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: props.imageWidth + " " + props.imageHeight
  }}>{props.children}</div>
)