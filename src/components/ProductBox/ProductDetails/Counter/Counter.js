import React from 'react';
import HorizontalLayout from '../../../HorizontalLayout/HorizontalLayout';
import VerticalLayout from '../../../VerticalLayout/VerticalLayout';

import plusIcon from '../../../../assets/img/plus-solid.svg';
import minusIcon from '../../../../assets/img/minus-solid.svg';
import * as styles from './Counter.module.css';

export default props => {
  return (
    <div className={styles.Counter}>
      <HorizontalLayout padding="0" hAlign="spaceBetween" vAlign="middle">
        <p className={styles.label}>{props.orderCount}</p>
        <VerticalLayout>
          <button onClick={() => props.onChangeHandler(props.orderCount + 1)} className={[styles.button, styles.plusButton].join(" ")}>
            <img alt="plusIcon" src={plusIcon}/>
          </button>
          <button onClick={() => props.onChangeHandler(props.orderCount - 1)} disabled={props.orderCount < 2} className={[styles.button].join(" ")}>
            <img alt="plusIcon" src={minusIcon}/>
          </button>
        </VerticalLayout>
      </HorizontalLayout>
    </div >
  )
}