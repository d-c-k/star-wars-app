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
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  background-color: black;
  animation: ${props => props.open ? rollIn : rollOut} 0.5s linear;

  @media screen and (min-width: 641px) and (max-width: 1007px){
    padding: 2rem 1rem;
  };
`;

const StyledDetailDisplay = styled.div`
  display: ${props => props.open ? "inherit" : "none"};

  p {
    color: white;
  }
`;

const StyledCloseButton = styled.button`
  position: fixed;
  cursor: pointer;
  display: ${props => props.open ? "initial" : "none"};
  top: 1.5rem;
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
