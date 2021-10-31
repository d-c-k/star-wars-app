import styled from 'styled-components';

const StyledSearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid black;
`;

const StyledSearchInput = styled.input`  
  width: 80%;
  border: none;
  height: 2rem;
  padding: 0 0.5rem;
`

const StyledSubmitButton = styled.input`
  cursor: pointer;
  outline: 1px solid black;
  border: none;
  max-width: 20%:
  height: 2rem;
  padding: 0.5rem;
  background-color: white;
  border-radius: 0;
  box-shadow: none;
  
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

