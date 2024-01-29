import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addNumber: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteNumber(state, actions) {
      const index = state.findIndex(
        contact => contact.id === actions.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export const { addNumber, deleteNumber } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
