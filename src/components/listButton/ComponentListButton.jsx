import React from 'react';

import StyledListButton from './StyledListButton';

export const ComponentListButton = ({props}) => {
  const handleOnClick = () => {
    console.log(props);
  }

  return (
    <StyledListButton type="button" onClick={handleOnClick}>
      {props.name}
    </StyledListButton>
  ) 
};

