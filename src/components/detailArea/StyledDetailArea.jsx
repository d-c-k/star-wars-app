import styled, { keyframes } from 'styled-components';

const rollIn = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

const rollOut = keyframes`
  from {
    height: 100%;
  }
  to {
    height: 0;
  }
`;

const StyledDetailAreaContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2rem;
  background-color: black;
  animation: ${props => props.open ? rollIn : rollOut} 0.5s linear;
`;

const StyledDetailDisplay = styled.div`
  width: 100%;
  margin-left: 1rem;
  display: ${props => props.open ? "inherit" : "none"};

  @media screen and (min-width: 1008px){
    margin-left: 2rem;
  }

  p {
    color: white;
  }
`;

const StyledCloseButton = styled.button`
  position: fixed;
  cursor: pointer;
  display: ${props => props.open ? "initial" : "none"};
  top: 2rem;
  right: 2rem;
  border: none;
  color: white;
  background-color: black;
  font-size: 1.5rem;
`;

export {
  StyledDetailAreaContainer,
  StyledDetailDisplay,
  StyledCloseButton,
};
