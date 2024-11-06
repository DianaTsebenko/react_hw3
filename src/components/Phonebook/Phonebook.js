import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    filter: '',
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();
  filterInputId = nanoid();

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = type => event => {
    this.setState({ [type]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, contacts } = this.state;

    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prevState => {
      const { contacts, name, number } = prevState;
      return {
        contacts: [...contacts, { id: nanoid(), name, number }],
        name: '',
        number: '',
      };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          nameInputId={this.nameInputId}
          numberInputId={this.numberInputId}
        />

        <h2>Contacts</h2>
        <Filter
          filter={filter}
          handleChange={this.handleChange}
          filterInputId={this.filterInputId}
        />
        <ContactList
          getFilteredContacts={this.getFilteredContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Phonebook;
