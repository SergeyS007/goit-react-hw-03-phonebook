import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import css from 'components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contacts}>
    {contacts.map(contact => (
      <ContactListItem
        key={contact.id}
        contacts={contact}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      Number: PropTypes.string,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
