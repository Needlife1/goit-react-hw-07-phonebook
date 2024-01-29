import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

const reducer = combineReducers({
  numbers: contactReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer,
});
