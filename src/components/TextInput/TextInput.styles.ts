import styled from 'styled-components/macro';
import {pxToRem} from "../../utils";


export const InputContainer = styled.div`
  border-radius: 29px;
  
`;

export const StyledTextInput = styled.input`

  border-radius:8px;
  height:100%;
  width:100%;
  font-size:${pxToRem(16)};

  /* color:
  /* &:focus{
    border:3px solid 
  } */
`;



export const Error = styled.p``;
export const Label = styled.label``;



export default InputContainer;
