import React from 'react';
import style from './ContactForm.module.css';

const ContactForm = ({
  name,
  number,
  handleChange,
  handleSubmit,
  nameInputId,
  numberInputId,
}) => (
  <form onSubmit={handleSubmit} className={style.contactForm}>
    <label htmlFor={nameInputId}>Name</label>

    <input
      type="text"
      name="name"
      value={name}
      onChange={handleChange('name')}
      id={nameInputId}
      required
      className={style.contactInput}
    />
    <label htmlFor={numberInputId}>Number</label>
    <input
      type="tel"
      name="number"
      value={number}
      id={numberInputId}
      onChange={handleChange('number')}
      required
      className={style.contactInput}
    />

    <button type="submit" className={style.btnSubmit}>
      Add Contact
    </button>
  </form>
);

export default ContactForm;
