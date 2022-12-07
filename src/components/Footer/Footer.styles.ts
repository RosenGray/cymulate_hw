import styled from "styled-components/macro";
import COLORS from "../../constants/colors";
import { backgroundImage } from "./constants";

const StyledFooter = styled.footer`
  min-height:828px;
  background: url(${backgroundImage});
  background-size: cover;
  background-position: top center;
`;

export default StyledFooter;
