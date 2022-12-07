import styled from "styled-components/macro";
import Button from "../../components/Button/Button";
import COLORS from "../../constants/colors";
import { contactUsSectionBg } from "./constants";

const SyledContactPage = styled.div`
 
`

export const ContactUs = styled.section`
  padding:1.25em;
  background-image: url(${contactUsSectionBg});
`;

export const Content = styled.div`

  max-width: 1200px;
  margin:auto;
  display: flex;
  justify-content: space-between;
`;

export const DemoBlock = styled.div`

  align-self: center;
  ${Button}{
    background-color: transparent;
    border: 1px solid #fff;
    height:60px;
    margin-top:35px;
    &:hover{
      background-color:white-space;
    }

  }
  
`;

export const Title = styled.h1`
font-weight: 600;
    font-size: 65px;
    line-height: 90%;
    letter-spacing: .1em;
    color:${COLORS.WHITE}
`;

export const Paragraph = styled.p`
font-weight: bold;
    font-size: 16px;
    line-height:  24px;
    letter-spacing: .1em;
    color:${COLORS.WHITE};
    margin:16px 0;
`;

export const SlideBar = styled.section`
  height:100px;
  background-color: ${COLORS.WHITE};
`;



export default SyledContactPage;