import { ContactUsTextField } from "./config";

export const initContactUsState = (textFields:ContactUsTextField[]) =>{
    return textFields.reduce((acc,field) => {

         acc[field.name] = field;

         return acc;
            
    },{} as Record<string,ContactUsTextField>);
}