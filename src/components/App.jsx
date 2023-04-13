import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';
import { Button } from '../components/ContactList/ContactList.styled';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const contacts = window.localStorage.getItem('contacts');
    const parsed = JSON.parse(contacts);
    return (
      parsed || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const checkName = contacts.some(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(checkName);
    if (!checkName) {
      setContacts([...contacts, newContact]);
    } else {
      alert(`${name}is already in contacts.`);
    }
  };

  const togleModal = () => {
    setShowModal(!showModal);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filterNormilized = filter.toLowerCase().trim();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormilized)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <Button
        type="button"
        style={{
          marginTop: '10px',
        }}
        onClick={togleModal}
      >
        Contacts
      </Button>
      {showModal && (
        <Modal onClick={togleModal}>
          <h2
            style={{
              textAlign: 'center',
              paddingBottom: '30px',
            }}
          >
            Contacts
          </h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />

          <Button type="button" onClick={togleModal}>
            Close
          </Button>
        </Modal>
      )}
    </div>
  );
}

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
