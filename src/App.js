import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Phonebook from './components/Phonebook';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  addStatePropery = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContact = this.getVisibleContacts();
    return (
      <React.Fragment>
        <h1>Phonebook</h1>
        <Phonebook
          addContact={this.addContact}
          contactBase={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} nameAdd={this.addStatePropery} />
        <Contacts
          contacts={visibleContact}
          deleteContact={this.deleteContact}
        />
      </React.Fragment>
    );
  }
}

export default App;
