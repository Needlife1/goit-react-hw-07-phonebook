import { useDispatch } from 'react-redux';
import { FilterStyled } from './Filter.styled';
import { setFilter } from '../../redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };
  return (
    <FilterStyled>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={handleFilterChange}
      />
    </FilterStyled>
  );
};
