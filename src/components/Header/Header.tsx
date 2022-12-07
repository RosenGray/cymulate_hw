import Button from "../Button/Button";
import StyledHeader, { Logo } from "./Header.styles"


const Header = () => {
    return <StyledHeader>
        <Logo src="https://cymulate.com/wp-content/uploads/2021/08/cymulate-logo.png"/>
      <Button> Get Started</Button>
   </StyledHeader>
}

export default Header ;