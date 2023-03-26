import React from 'react';
import css from '../ContactsList/ContactsList.module.css';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (<ul className={css.listWrapper}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactItem}>
        <p className={css.name}>{name}:</p>
        <p className={css.number}>{number}</p>
        <button
          type="button"
          className={css.button}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>);
};
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

