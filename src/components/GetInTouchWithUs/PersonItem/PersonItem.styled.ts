import styled from "styled-components";

const StyledPersonItem = styled.figure`
   display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 16px;
    border-bottom: 14px solid #0e54c4;
    text-align: center;
    align-items: center;
    margin-top: 60px;
    width: 220px;
    min-height: 220px;
    height: auto;
    margin-left: 8px;
    margin-right: 8px;
`;

export const Image = styled.img`
  transform: translateY(-25%);
`;
export const Role = styled.figcaption`

    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: .05em;
    color: #070723;
    margin-bottom: 18px;;

`;
export const Decription = styled.span``;


export default StyledPersonItem;