import { PersonItemProps } from "../GetInTouchWithUs";
import StyledPersonItem,{Image,Role,Decription} from "./PersonItem.styled";



const PersonItem:React.FC<PersonItemProps>= ({image,role,description}) => {
 return <StyledPersonItem>
     <Image src={image} alt={role}/>
     <Role>{role}</Role>
     <Decription>{description}</Decription>
 </StyledPersonItem>
}

export default PersonItem;