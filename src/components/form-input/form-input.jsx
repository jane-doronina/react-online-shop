import { FormInputLabel, Group, FormInput } from "./form-input.styles"

const InputField = ({label, ...otherProps}) => {
  return (
    <Group>
      <FormInput {...otherProps}/>
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
    </Group>
  );
};

export default InputField;
