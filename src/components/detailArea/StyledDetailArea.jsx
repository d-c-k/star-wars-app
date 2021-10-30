import styled from 'styled-components';

const StyledDetailAreaContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2rem;
  background-color: black;
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }
`;

const StyledDetailDisplay = styled.div`
  width: 100%;
  margin-left: 1rem;

  @media screen and (min-width: 1008px){
    margin-left: 2rem;
  }
  p {
    color: white;
  }
`;

export {
  StyledDetailAreaContainer,
  StyledDetailDisplay,
};
