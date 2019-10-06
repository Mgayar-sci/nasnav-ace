import React from 'react';

import star from '../../assets/img/star.png';
import halfStar from '../../assets/img/half-star.png';

export default props => {

  let rating = Array(Math.floor(props.rate)).fill("").map((item, ndx) => <img
    src={star} alt=""
    key={ndx}
    style={{ width: props.starWidth, marginRight: ndx === Math.ceil(props.rate) ? 0 : (props.starWidth / 6 || 0) }}
  />);
  rating = rating.length < props.rate ? rating.concat(<img
    src={halfStar} alt=""
    key={Math.ceil(props.rate)}
    style={{ width: props.starWidth, marginRight: 0 }}
  />) : rating;
  return (
    <div>
      {
        rating
      }
    </div>
  );
}