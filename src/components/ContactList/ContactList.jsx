import { PropTypes } from 'prop-types';
import { UlOfContact, ContactItem, Button } from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => (
  <UlOfContact>
    {contacts.map(({ id, number, name }) => (
      <ContactItem key={id}>
        {name}: {number}
        <Button onClick={() => onDeleteContact(id)} type="button">
          Delete
        </Button>
      </ContactItem>
    ))}
  </UlOfContact>
);

export default ContactList;

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
