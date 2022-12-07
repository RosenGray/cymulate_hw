import styled from 'styled-components/macro';
import {pxToRem} from "../../utils";


export const InputContainer = styled.div`
  
  
`;

export const StyledTextInput = styled.input`
    border: 1px solid #e5e5e5;
    border-radius: 29px;
  height:100%;
  width:100%;
  height: 47px;
  padding:12px;
  font-size:${pxToRem(16)};

  /* color:
  /* &:focus{
    border:3px solid 
  } */
`;



export const Error = styled.p``;
export const Label = styled.label``;



export default InputContainer;
