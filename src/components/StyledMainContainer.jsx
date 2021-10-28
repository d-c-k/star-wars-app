import styled from 'styled-components';

const StyledMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  overflow: hidden;

  @media screen and (max-width: 640px){
    grid-template-columns: 1rem 1fr 1fr 1rem;
  }

  @media screen and (min-width: 641px){
    grid-template-columns: 2rem 1fr 1fr 1fr 2rem;
    grid-column-gap: 1rem;
  }

  @media screen and (min-width: 1008px){
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
    grid-column-gap: 2rem;
  }
`;

export default StyledMainContainer;
