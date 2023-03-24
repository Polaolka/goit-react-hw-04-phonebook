import React from 'react';
import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange, totalcontactsCount }) => (
  <form className={css.form}>
    <div>
      <p className={css.count}>Total contacts: <span className={css.number}>{totalcontactsCount}</span></p>
    </div>
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </form>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  totalcontactsCount: PropTypes.number.isRequired
}