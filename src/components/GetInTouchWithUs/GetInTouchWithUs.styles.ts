import styled  from "styled-components/macro";

 const StyledGetInTouchWithUs = styled.section`
  padding:5em;
  background-color: #F6F6F6;
  text-align: center;
`;
export const Title = styled.h2`
font-weight: 600;
    font-size: 45px;
    line-height: 90%;
    text-align: center;
    letter-spacing: .1em;
    color: #070723;
`;

export const Employees = styled.div`

max-width: 1080px;
margin: auto;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  margin-bottom: 80px;

`;



export default StyledGetInTouchWithUs;