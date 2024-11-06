import React from 'react';
import style from './Filter.module.css';

const Filter = ({ filter, handleChange, filterInputId }) => (
  <div className={style.filterInput}>
    <label htmlFor={filterInputId}>Find contacts by name</label>
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange('filter')}
      id={filterInputId}
    />
  </div>
);

export default Filter;
