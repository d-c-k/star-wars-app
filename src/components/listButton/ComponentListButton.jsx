import React, { useContext } from 'react';

import { DataContext } from '../../contexts/DataContext';

import StyledListButton from './StyledListButton';

export const ComponentListButton = ({props}) => {
  const { setFocused } = useContext(DataContext);

  const handleOnClick = () => {
    setFocused(props);
  }

  return (
    <StyledListButton type="button" onClick={handleOnClick}>
      {props.name}
    </StyledListButton>
  ) 
};

