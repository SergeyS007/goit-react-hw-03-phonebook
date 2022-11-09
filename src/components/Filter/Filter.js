import React from 'react';
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.filter_label}>
    Find contacts by name
    <input
      className={css.filter_input}
      type="text"
      value={value}
      onChange={onChange}
      style={{
        outline: value !== '' ? '2px solid rgb(41, 41, 240)' : 'none',
      }}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
