import React from 'react';

interface UseCardNumberInputProps {
  onChange?: (v: string) => void;
}
const useCardNumberInput = ({ onChange }: UseCardNumberInputProps) => {
  const [value, setValue] = React.useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value: inputValue } = e.target;
    setValue((prev) => {
      const newValue = { ...prev, [name]: inputValue };
      onChange?.(
        `${newValue.input1}${newValue.input2}${newValue.input3}${newValue.input4}`
      );
      return newValue;
    });
  };

  return {
    value,
    handleChange,
  };
};

export default useCardNumberInput;
