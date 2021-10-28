import React, { useState } from 'react';

import {
  StyledSearchForm,
  StyledSearchInput,
  StyledSubmitButton,
} from './StyledSearchBar.jsx'

export const ComponentSearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  }

  return (
    <StyledSearchForm>
      <StyledSearchInput 
        type="text" 
        value={searchInput} 
        onChange={handleOnChange}
        placeholder="Enter character" 
      />
      <StyledSubmitButton type="submit" value="SEARCH" />
    </StyledSearchForm>
  ) 
};

