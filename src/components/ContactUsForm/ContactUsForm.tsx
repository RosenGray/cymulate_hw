import { ChangeEvent, useCallback, useState } from "react";
import TextInput from "../TextInput/TextInput";
import { ContactUsTextField, countries, textFields } from "./config";
import StyledContactUsForm, { Message } from "./ContactUsForm.styles";
import { initContactUsState } from "./utils";
import produce from "immer";
import Select, { OptionProps, Option } from "../Select/Select";
import Button from "../Button/Button";

const ContactUsForm = () => {
  const [textInputs, setTextInput] = useState<
    Record<string, ContactUsTextField>
  >(initContactUsState(textFields));
  const [country, setCountry] = useState(countries[0]);

  const textInputChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setTextInput((p) => {
        return produce(p, (draft) => {
          draft[name].value = value;
        });
      });
    },
    []
  );

  const onSelectHandler = (option: OptionProps) => {
    setCountry(option);
  };

  const renderInputTextFields = () => {
    return Object.values(textInputs).map((field) => {
      const { id, name, placeholder, value, isRequired } = field;

      return (
        <TextInput
          key={name}
          name={name}
          placeholder={placeholder}
          value={value}
          required={isRequired}
          onChange={textInputChangeHandler}
        />
      );
    });
  };

  return (
    <StyledContactUsForm>
      {renderInputTextFields()}
      <Select options={countries} onSelectOption={onSelectHandler}>
        <Option label="Please select a country" value="" />
      </Select>
      <Message placeholder="Leave us a message*" />
      <Button onClick={() => {
        alert('Thank you, we will be in touch')
      }}>GET IN TOUCH</Button>
    </StyledContactUsForm>
  );
};

export default ContactUsForm;
