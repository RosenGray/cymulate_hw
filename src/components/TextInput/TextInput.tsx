import React, {ChangeEvent, useState} from "react";
import classnames from "classnames";
import InputContainer, {Error, Label, StyledTextInput} from "./TextInput.styles";


interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  classNames?:Record<string, unknown>;
  containerClassNames?:Record<string, unknown>;
  value: string | number | readonly string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  rootRef?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
  label?:string;
    [key: string]: unknown;
    size?: number;
}

const TextInput: React.FC<InputProps> = ({
  value,
  onChange,
  disabled = false,
  classNames,
  rootRef,
  label,
  children,
  size= 15,
  containerClassNames,
 ...props
}) => {
 const [isFocused,setIsFocused] = useState(false);

  return (
      <InputContainer className={classnames(containerClassNames)}>
          {label && <Label>{label}</Label>}
        <StyledTextInput
            ref={rootRef}
            disabled={disabled}
            data-disabled={disabled}
            data-focued={isFocused}
            data-value-length={value.toString().length}
            onChange={onChange}
            value={value}
            size={size}
            onFocus={() => {
              if(!isFocused){
                setIsFocused(true);
              }
            }}
            onBlur={() => {
              if(isFocused){
                setIsFocused(false);
              }
            }}
            className={classnames({
              ...classNames,
              isFocused
            })}
            {...props}
        />
        {children && children}
      </InputContainer>



  );
};

export default TextInput;
