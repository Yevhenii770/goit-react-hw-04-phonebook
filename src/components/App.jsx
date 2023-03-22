import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';
import { Button } from '../components/ContactList/ContactList.styled';
import { nanoid } from 'nanoid';

import { PropTypes } from 'prop-types';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsed = JSON.parse(contacts);

    if (parsed) {
      this.setState({ contacts: parsed });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const checkName = this.state.contacts.some(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    if (!checkName) {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    } else {
      alert(`${name}is already in contacts.`);
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const filterNormilized = this.state.filter.toLowerCase().trim();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormilized)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <Button
          type="button"
          style={{
            marginTop: '10px',
          }}
          onClick={this.togleModal}
        >
          Contacts
        </Button>
        {this.state.showModal && (
          <Modal onClick={this.togleModal}>
            <h2
              style={{
                textAlign: 'center',
                paddingBottom: '30px',
              }}
            >
              Contacts
            </h2>
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />

            <Button type="button" onClick={this.togleModal}>
              Close
            </Button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  formSubmitHandler: PropTypes.func,
  deleteContact: PropTypes.func,
  changeFilter: PropTypes.func,
};
