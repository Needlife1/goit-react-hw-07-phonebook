import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <h1 style={{ color: 'pink' }}>Phonebook</h1>
      <Form />
      <h2 style={{ color: 'pink' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
