import React from 'react';

import Thumb from './Thumb/Thumb';

export default props => (
  <div>
    {
      props.productThumbs.map((thumb, ndx) => <Thumb imgUrl={thumb} key={ndx} clickHandler={ () => props.clickHandler(ndx) }/>)
    }
  </div>
)