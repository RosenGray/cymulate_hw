import React, { ChangeEvent } from 'react';

export interface SelectProps
  extends React.HtmlHTMLAttributes<HTMLSelectElement> {
  options: OptionProps[];
  onSelectOption: (option: OptionProps) => void;
}

export interface OptionProps
  extends React.HtmlHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}

export const Option: React.FC<OptionProps> = ({ label, value, ...props }) => {
  return (
    <option value={value} {...props}>
      {label}
    </option>
  );
};

const Select: React.FC<SelectProps> = ({
  options,
  onSelectOption,
  ...props
}) => {
  const _options = options.map((option) => (
    <Option key={option.value} label={option.label} value={option.value} />
  ));

  const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options[e.target.selectedIndex];
    onSelectOption(selectedOption);
  };

  return (
    <select onChange={onSelectHandler} {...props}>,
    {props.children}
      {_options}
    </select>
  );
};

export default Select;
