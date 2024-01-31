import { ContactListStyled } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from '../../redux/selector';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const visibleContacts = selectVisibleContacts(contacts, filter);

  const handleDelete = id => dispatch(deleteContact(id));

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
