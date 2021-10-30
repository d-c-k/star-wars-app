import styled from 'styled-components';

const StyledDetailContainer = styled.div`
  @media screen and (max-width: 640px){
    position: absolute;
    width: 100vw;
    height: 100vh;

    top: 0;
    left: 0;
    z-index: 1;
  }
  
  @media screen and (min-width: 641px){
    grid-column: 2;
    grid-row: 1/3;
  }
  
  @media screen and (min-width: 1008px){
    grid-column: 3;
    grid-row: 1;
  }
`;

export default StyledDetailContainer;
