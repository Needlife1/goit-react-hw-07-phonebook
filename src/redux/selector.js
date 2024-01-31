export const selectContacts = state => state.numbers;
export const selectFilter = state => state.filters;
export const selectIsLoading = state => state.filters.isLoading;
export const selectError = state => state.filters.error;
export const selectVisibleContacts = (contacts, filter) => {
  return contacts.items.filter(contact => contact.name.includes(filter));
};
