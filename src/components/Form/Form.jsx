import { FormStyled } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selector';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts) {
      const contactExists = contacts.some(contact => contact.name === name);
      if (!contactExists) {
        dispatch(addNumber({ name, number }));
      } else {
        alert(`Контакт с именем ${name} уже существует!`);
      }
    }
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label htmlFor="Name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="Name"
        />
      </label>

      <label htmlFor="Number">
        Number
        <input
          id="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </FormStyled>
  );
};
