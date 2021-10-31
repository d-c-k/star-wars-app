import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { DataContext } from './contexts/DataContext';

import logo from './assets/logo.svg';

import { ComponentSearchBar } from './components/searchBar/ComponentSearchBar';
import { ComponentListButton } from './components/listButton/ComponentListButton';
import { ComponentDetailArea } from './components/detailArea/ComponentDetailArea';

import StyledMainContainer from './components/layout/StyledMainContainer';
import StyledHeadContainer from './components/layout/StyledHeadContainer';
import StyledListContainer from './components/layout/StyledListContainer';
import StyledDetailContainer from './components/layout/StyledDetailContainer';

function App() {
  const [people, setPeople] = useState([]);
  const [focused, setFocused] = useState(null);
  const [errorMsg, setErrorMsg] = useState('Loading...');
  const DataContextValue = {
    people,
    setPeople,
    focused,
    setFocused,
    errorMsg,
    setErrorMsg,
  };

  useEffect(() => {
    setPeople([]);
    const getData = (path) => {
      axios.get(path).then(res => {
        processResponse(res.data);
      })
      .catch(err => setErrorMsg('Server error, data not loading.'));
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
          <a href="/star-wars-app/">
            <img src={logo} alt="logo" />
          </a>
          <ComponentSearchBar />
        </StyledHeadContainer>
        <StyledListContainer>
          { people.length > 0
            ?
            people.map((item, index) => {
              return <ComponentListButton key={index} props={item} />
            })
            :
            <p>{errorMsg}</p>
          }
        </StyledListContainer>
        { focused &&
        <StyledDetailContainer>
          <ComponentDetailArea props={focused} />
        </StyledDetailContainer>
        }
      </DataContext.Provider>
    </StyledMainContainer>
  );
}

export default App;
