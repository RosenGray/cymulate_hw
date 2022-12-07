import styled from "styled-components/macro";
import COLORS from "../../constants/colors";


const StyledContactUsForm = styled.form`
  max-width: 600px;
  width:100%;
  padding:2.8em;
  border-radius: 16px;
  background-color: ${COLORS.WHITE};
  box-shadow: 0 0 24px rgb(0 0 0 / 8%);
  display: grid;
  grid-template-columns:repeat(2,240px);
  justify-content: space-between;
  row-gap: 24px;

  select {
     grid-column: 1/3;
     border: 1px solid #e5e5e5;
    border-radius: 29px;
    height: 100%;
    width: 100%;
    height: 47px;
     padding:0 12px;
    font-size: 1.6rem;
  }
`;


export const Message = styled.textarea`
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 29px;
    min-height: 47px;
   font-size: 20px;;
    color: #404040;
    padding: 22px 12px;
    width: 100%;
    color: #070723;
    opacity: .6;
    grid-column: 1/3;
`;

export default StyledContactUsForm;
