import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { IconButton } from '../IconButton/IconButton';
import { Form, SearchInput } from './SearchForm.styled';
import { ReactComponent as LoupeIcon } from '../../icons/loupe.svg';

export function SearchForm({ submitForm, resetImageData }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleOnChange = ({ currentTarget: { value } }) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.warn('Warning! Search must not be empty');
      resetImageData();
      return;
    }
    submitForm(searchQuery);
    setSearchQuery('');
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <SearchInput
        type="text"
        autoComplete="off"
        placeholder="Search images..."
        name="searchQuery"
        autoFocus
        value={searchQuery}
        onChange={handleOnChange}
      />
      <IconButton type="submit" aria-label="search images">
        <LoupeIcon width="40" height="40" />
      </IconButton>
    </Form>
  );
}

SearchForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
