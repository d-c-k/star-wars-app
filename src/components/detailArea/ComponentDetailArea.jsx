import React, { useState, useEffect } from 'react';

import {
  StyledDetailAreaContainer,
  StyledDetailDisplay,
} from './StyledDetailArea';

export const ComponentDetailArea = ({ props }) => {
  const [listItems, setListItems] = useState([]);
  const [displayProps, setDisplayProps] = useState([]);

  useEffect(() => {
    setDisplayProps([
      `Height : ${props.height}`,
      `Mass : ${props.mass}`,
      `Hair color : ${props.hair_color}`,
      `Skin color : ${props.skin_color}`,
      `Eye color : ${props.eye_color}`,
      `Gender : ${props.gender}`
    ]);
  }, [props]);

  useEffect(() => {
    setListItems([]);
    displayProps.map((item, index) => {
      return setTimeout(() => {
        setListItems(items =>[...items, item]);
        console.log(item);
      }, 200*index);
    });
  }, [displayProps]);

  return (
    <StyledDetailAreaContainer>
      <StyledDetailDisplay>
        <p>{props.name}</p>
        <br/>
        { listItems && listItems.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </StyledDetailDisplay>
    </StyledDetailAreaContainer>
  ) 
};
