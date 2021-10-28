import styled from 'styled-components';

const StyledSearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid black;
`;

const StyledSearchInput = styled.input`  
  border: none;
  height: 2rem;
  padding: 0 0.5rem;
`

const StyledSubmitButton = styled.input`
  outline: 1px solid black;
  border: none;
  height: 2rem;
  padding: 0 0.5rem;
  background-color: white;
  
  :hover, :active {
    color: white;
    background-color: black;
  }
`;

export {
  StyledSearchForm,
  StyledSearchInput,
  StyledSubmitButton,
};

