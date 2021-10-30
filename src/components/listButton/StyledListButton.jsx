import styled from 'styled-components';

const StyledListButton = styled.button`
  cursor: pointer;
  width: 100%;
  min-height: 2rem;
  background-color: white;
  border: 1px solid black;
  margin-bottom: 1rem;
  text-align: left;
  padding: 0.5rem;

  :hover, :active {
    background-color: black;
    color: white;
  }

  @media screen and (max-width: 640px){
  }

  @media screen and (min-width: 641px){
  }

  @media screen and (min-width: 1008px){
  }
`;

export default StyledListButton;

