import css from 'components/ContactList/ContactList.module.css';

const ContactListItem = ({ contacts, onDeleteContact }) => {
  const { id, name, number } = contacts;
  return (
    <li className={css.contactsItem} key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;
