import { FormStyled } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selector';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.items) {
      const contactExists = contacts.items.some(
        contact => contact.name === name
      );
      if (!contactExists) {
        console.log({ name, number });

        dispatch(addContact({ name, number }));
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
