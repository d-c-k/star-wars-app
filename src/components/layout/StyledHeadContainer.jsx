import styled from 'styled-components';

const StyledHeadContainer = styled.div`
  margin-top: 2rem;

  @media screen and (max-width: 640px){
    grid-column: 2;
  }

  @media screen and (min-width: 641px){
    grid-column: 1;
  }

  @media screen and (min-width: 1008px){
    grid-column: 1;
  }

  img {
    min-width: 100%;
  }
`;

export default StyledHeadContainer;
