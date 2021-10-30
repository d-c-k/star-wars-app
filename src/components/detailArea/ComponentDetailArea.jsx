import React, { useState, useEffect, useContext } from 'react';

import { DataContext } from '../../contexts/DataContext';

import {
  StyledDetailAreaContainer,
  StyledDetailDisplay,
  StyledCloseButton,
} from './StyledDetailArea';

export const ComponentDetailArea = ({ props }) => {
  const [listItems, setListItems] = useState([]);
  const [displayProps, setDisplayProps] = useState([]);
  const [open, setOpen] = useState(true);
  const { setFocused } = useContext(DataContext);

  useEffect(() => {
    setDisplayProps([
      '│',
      `├─ Height : ${props.height}`,
      `├─ Mass : ${props.mass}`,
      `├─ Hair color : ${props.hair_color}`,
      `├─ Skin color : ${props.skin_color}`,
      `├─ Eye color : ${props.eye_color}`,
      `├─ Birth year : ${props.birth_year}`,
      `└─ Gender : ${props.gender}`
    ]);
  }, [props]);

  useEffect(() => {
    setListItems([]);
    displayProps.map((item, index) => {
      return setTimeout(() => {
        setListItems(items =>[...items, item]);
      }, 100*index);
    });
  }, [displayProps]);

  const handleOnClick = (e) => {
    setOpen(false);
    setTimeout(() => {
      setFocused(null);
    }, 490);
  };

  return (
    <StyledDetailAreaContainer open={open}>
      <StyledCloseButton open={open} onClick={handleOnClick}>
        x
      </StyledCloseButton>
      <StyledDetailDisplay open={open}>
        <p>{props.name}</p>
        { listItems && listItems.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </StyledDetailDisplay>
    </StyledDetailAreaContainer>
  ) 
};
