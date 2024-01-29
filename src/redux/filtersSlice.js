import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
