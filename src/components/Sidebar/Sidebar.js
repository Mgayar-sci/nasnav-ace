import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import * as styles from './Sidebar.module.css';
import Backdrop from '../Backdrop/Backdrop';
export default props => (
  <div className={[styles.Sidebar, (!props.show && styles.hide), (props.open && styles.open)].join(" ")}>
    <div className={styles.contents}>
      <header>
        <h3>Menu</h3>
        <button onClick={props.clickHandler}>
          <h3><FontAwesomeIcon icon={faTimes} /></h3>
        </button>
      </header>
      {props.children}
    </div>
    <Backdrop show={props.show} open={props.open} clickHandler={props.clickHandler} />
  </div>
)