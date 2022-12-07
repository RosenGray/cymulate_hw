import styled from "styled-components/macro";
import { contactUsSectionBg } from "./constants";

const SyledContactPage = styled.div`
  border:1px solid green;
`

export const ContactUs = styled.section`
  padding:1.25em;
  background-image: url(${contactUsSectionBg});
`;

export const Content = styled.div`
  border:2px solid red;
  max-width: 1200px;
  margin:auto;
`;



export default SyledContactPage;