import React, { useEffect, useState } from 'react';

import logo from './assets/logo.svg';

import { ComponentSearchBar } from './components/searchBar/ComponentSearchBar';
import { ComponentListButton } from './components/listButton/ComponentListButton';

import { getAllPeople } from './fetches/fetches';

import StyledMainContainer from './components/StyledMainContainer';
import StyledHeadContainer from './components/StyledHeadContainer';
import StyledListContainer from './components/StyledListContainer';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople([]);
    for(let page = 1; page < 10; page++){
      getAllPeople(page)
        .then(res => setPeople(people => [...people, ...res.data.results]));
    }
  }, [])

  return (
    <StyledMainContainer>
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
    </StyledMainContainer>
  );
}

export default App;
