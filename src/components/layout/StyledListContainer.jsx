import styled from 'styled-components';

const StyledListContainer = styled.div`
  padding: 2rem 0 2rem 0;
  overflow: scroll;
    
  @media screen and (max-width: 640px){
    grid-column: 2;
  }

  @media screen and (min-width: 641px){
    grid-column: 1;
  }

  @media screen and (min-width: 1008px){
    grid-column: 2;
  }
`;

export default StyledListContainer;
