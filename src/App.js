import { Component } from 'react';
import './App.css';
import Section from './components/Section/Section';
import Filter from './components/Filter/Filter';
import Form from './components/Form';
import Contacts from './components/Contacts/Contacts';

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

  AddNewContact = contact => {
    const addedName = this.state.contacts
      .map(el => el.name.toLowerCase())
      .includes(contact.name.toLowerCase());

    if (addedName) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  addFilter = e => {
    this.setState({ filter: e.target.value.trim() });
  };
  filteredContacts = () => {
    return this.state.contacts.filter(el =>
      el.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase()),
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { AddNewContact, addFilter, deleteContact, filteredContacts } = this;
    return (
      <Section>
        <h1>Phonebook</h1>
        <Form AddNewContact={AddNewContact} />
        <h2>Contacts</h2>
        <Filter filter={addFilter} />
        <Contacts contacts={filteredContacts()} deleteContact={deleteContact} />
      </Section>
    );
  }
}

export default App;
