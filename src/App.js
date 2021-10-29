import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { DataContext } from './contexts/DataContext';

import logo from './assets/logo.svg';

import { ComponentSearchBar } from './components/searchBar/ComponentSearchBar';
import { ComponentListButton } from './components/listButton/ComponentListButton';
import { ComponentDetailArea } from './components/listButton/ComponentDetailArea';

import StyledMainContainer from './components/layout/StyledMainContainer';
import StyledHeadContainer from './components/layout/StyledHeadContainer';
import StyledListContainer from './components/layout/StyledListContainer';

function App() {
  const [people, setPeople] = useState([]);
  const [focused, setFocused] = useState(null);
  const DataContextValue = {
    people,
    setPeople,
    focused,
    setFocused
  };

  useEffect(() => {
    setPeople([]);
    const getData = (path) => {
      axios.get(path).then(res => {
        processResponse(res.data);
      });
    };

    const processResponse = (data) => {
      setPeople(people => [...people, ...data.results]);
      data.next && getData(data.next);
    };

    const initialPath = 'https://swapi.dev/api/people';
    getData(initialPath);
  }, [])

  return (
    <StyledMainContainer>
      <DataContext.Provider value={DataContextValue}>
        <StyledHeadContainer>
          <img src={logo} alt="logo" />
          <ComponentSearchBar />
        </StyledHeadContainer>
        <StyledListContainer>
          { people.length > 0
            ?
            people.map((item, index) => {
              return <ComponentListButton key={index} props={item} />
            })
            :
            <p>No characters found</p>
          }
        </StyledListContainer>
        {focused && <ComponentDetailArea.jsx props={focused} />}
      </DataContext.Provider>
    </StyledMainContainer>
  );
}

export default App;
