import React from 'react';

import * as styles from './ProductFilterColumn.module.css';
export default props => (
  <div className={styles.ProductFilterColumn}>
    <h3 className={styles.header}>{props.headerText}</h3>
    <ul>
      {props.filters.map(filter => (
        <li key={filter.id}>
          <label>
            <input type="checkbox" name="filter" value={filter} onChange={() => props.clickHandler(filter)} /><span>{filter.name} ({filter.count})</span>
          </label>
        </li>
      ))}
      
    </ul>
  </div>
)