import { CustomFlowbiteTheme, TextInput, TextInputProps } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['textInput'] = {
  field: {
    input: {
      withAddon: {
        off: 'rounded-none',
      },
    },
  },
};

export function Input(props: TextInputProps) {
  return <TextInput theme={customTheme} {...props} />;
}
