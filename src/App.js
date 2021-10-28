import React, { useEffect, useState } from 'react';

import logo from './assets/logo.svg';

import { ComponentSearchBar } from './components/searchBar/ComponentSearchBar';

import StyledMainContainer from './components/StyledMainContainer';
import StyledHeadContainer from './components/StyledHeadContainer';

function App() {
  return (
    <StyledMainContainer>
      <StyledHeadContainer>
        <img src={logo} alt="logo" />
        <ComponentSearchBar />
      </StyledHeadContainer>
    </StyledMainContainer>
  );
}

export default App;
