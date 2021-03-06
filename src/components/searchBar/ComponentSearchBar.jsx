import React, { useState, useContext } from 'react';
import axios from 'axios';

import { DataContext } from '../../contexts/DataContext';

import {
  StyledSearchForm,
  StyledSearchInput,
  StyledSubmitButton,
} from './StyledSearchBar.jsx'

export const ComponentSearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const { setPeople, setErrorMsg } = useContext(DataContext);
  
  const getData = (path) => {
    axios.get(path).then(res => {
      processResponse(res.data);
    })
    .catch(err => setErrorMsg('Server error, data not loading.'));
  };

  const processResponse = (data) => {
    if(data.results < 1){
      setErrorMsg('No data found');
    };
    setPeople(people => [...people, ...data.results]);
    data.next && getData(data.next);
  };

  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleOnSearch = (e) => {
    e.preventDefault();
    setPeople([]);
    const initialPath = `https://swapi.dev/api/people/?search=${searchInput}`;
    getData(initialPath);
  };

  return (
    <StyledSearchForm onSubmit={handleOnSearch}>
      <StyledSearchInput 
        type="text" 
        value={searchInput} 
        onChange={handleOnChange}
        placeholder="Enter name" 
      />
      <StyledSubmitButton type="submit" value="SEARCH" />
    </StyledSearchForm>
  ) 
};

