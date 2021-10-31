import styled from 'styled-components';

const StyledMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  overflow: hidden;

  @media screen and (max-width: 640px){
    grid-template-columns: 1rem 1fr 1rem;
  }

  @media screen and (min-width: 641px){
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 1rem;
    padding-left: 1rem;
  }

  @media screen and (min-width: 1008px){
    grid-template-columns: 1fr 1fr 50%;
    grid-column-gap: 2rem;
    padding-left: 2rem;
  }
`;

export default StyledMainContainer;
