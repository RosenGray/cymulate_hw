import { OptionProps } from "../Select/Select";

export interface ContactUsTextField {
    id:string;
    name:string;
    placeholder:string;
    value:string;
    isRequired:boolean
    isError?:boolean;
    errorMessage:string;
}
export const textFields:ContactUsTextField[] = [
  
 {
    id:'firstName',
    name:'firstName',
    placeholder:'First Name*',
    isRequired:true,
    value:'',
    errorMessage:'Please complete this required field'
 },
 {
    id:'lastName',
    name:'lastName',
    placeholder:'Last Name*',
    isRequired:true,
    value:'',
    errorMessage:'Please complete this required field'
 },
 {
    id:'jobTitle',
    name:'jobTitle',
    placeholder:'Job Title*',
    isRequired:true,
    value:'',
    errorMessage:'Please complete this required field'
 },
 {
    id:'companyName',
    name:'companyName',
    placeholder:'Company Name*',
    isRequired:true,
    value:'',
    errorMessage:'Please complete this required field'
 },
 {
    id:'businessEmail',
    name:'businessEmail',
    placeholder:'Business email*',
    isRequired:true,
    value:'',
    errorMessage:'Please complete this required field'
 }
     
]



export const countries:OptionProps[] = [
  {label:'Israel',value:'Israel'},
  {label:'Afghanistan',value:'Afghanistan'},
  {label:'Albania',value:'Albania'},
  {label:'Algeria',value:'Algeria'},
  {label:'Argentina',value:'Argentina'},
]
