import { ContactListStyled } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNumber } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selector';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact => contact.name.includes(filter));
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const visibleContacts = getVisibleContacts(contacts, filter);

  const handleDelete = id => dispatch(deleteNumber({ id }));

  return (
    <>
      <ContactListStyled>
        {visibleContacts.map(contact => (
          <li key={contact.id} id={contact.id}>
            <p style={{ color: 'pink' }}>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ContactListStyled>
    </>
  );
};
