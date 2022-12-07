import { ButtonHTMLAttributes } from "react";
import styled from "styled-components/macro";


export interface StyledButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const StyledButton = styled.button`
   height:47px;
   background-color: #0e54c4;
   padding: 0 40px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: .05em;
    text-align: center;
    border-radius: 60px;
    color:white;
    &:hover{
        background-color: black;
    }
`;

export default StyledButton;
