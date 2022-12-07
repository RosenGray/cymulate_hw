import Button from '../Button/Button';
import StyledGetInTouchWithUs,{Title,Employees} from './GetInTouchWithUs.styles'
import PersonItem from './PersonItem/PersonItem';

export interface PersonItemProps {
    id:string;
    image:string;
    role:string;
    description:string;
}

const people :PersonItemProps[] = [
    {id:'1',image:'https://cymulate.com/wp-content/uploads/2022/09/Group-1074-1.png',role:'Amber houston',description:'Sales NAM'},
    {id:'2',image:'https://cymulate.com/wp-content/uploads/2022/09/Group-1074-1.png',role:'Amber houston',description:'Sales NAM'},
    {id:'3',image:'https://cymulate.com/wp-content/uploads/2022/09/Group-1074-1.png',role:'Amber houston',description:'Sales NAM'},
    {id:'4',image:'https://cymulate.com/wp-content/uploads/2022/09/Group-1074-1.png',role:'Amber houston',description:'Sales NAM'},
    {id:'5',image:'https://cymulate.com/wp-content/uploads/2022/09/Group-1074-1.png',role:'Amber houston',description:'Sales NAM'},
    {id:'6',image:'https://cymulate.com/wp-content/uploads/2022/09/Group-1074-1.png',role:'Amber houston',description:'Sales NAM'},
    {id:'7',image:'https://cymulate.com/wp-content/uploads/2022/09/Group-1074-1.png',role:'Amber houston',description:'Sales NAM'},
    {id:'8',image:'https://cymulate.com/wp-content/uploads/2022/09/Group-1074-1.png',role:'Amber houston',description:'Sales NAM'},
]


const GetInTouchWithUs = () => {
    return <StyledGetInTouchWithUs>
         <Title>Get in Touch Eith us</Title>
         <Employees>
         {people.map(person => {
            const {image,role,description,id} = person;
            return <PersonItem key={id} description={description} image={image} role={role} id={id}/>
        })}
         </Employees>

         <Button>
Company Leadership Team </Button>
    </StyledGetInTouchWithUs>
}
export default GetInTouchWithUs;

