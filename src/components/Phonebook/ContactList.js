import React from 'react';
import style from './ContactList.module.css';

const ContactList = ({ getFilteredContacts, handleDelete }) => (
  <ul className={style.contactList}>
    {getFilteredContacts().map(contact => (
      <li key={contact.id} className={style.contactItem}>
        {contact.name}: {contact.number}
        <button
          type="button"
          onClick={() => handleDelete(contact.id)}
          className={style.contactBtn}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
