import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, nameAdd }) => {
  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    nameAdd(name, value);
  };

  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputChange}
      ></input>
      <br />
      Find contacts by name
    </label>
  );
};

export default Filter;
