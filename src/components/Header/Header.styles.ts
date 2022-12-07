import styled from "styled-components/macro";
import COLORS from "../../constants/colors";

const StyledHeader = styled.header`

  height:110px;
  background-color: ${COLORS.WHITE};
  padding:0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img``;

export default StyledHeader;
