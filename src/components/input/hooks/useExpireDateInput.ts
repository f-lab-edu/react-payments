import React from 'react';

interface UseExpireDateInputProps {
  onChange?: (v: string) => void;
}
const useExpireDateInput = ({ onChange }: UseExpireDateInputProps) => {
  const [, setValue] = React.useState({
    input1: '',
    input2: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => {
      const newValue = { ...prev, [name]: value };
      onChange?.(`${newValue.input1}${newValue.input2}`);
      return newValue;
    });
  };
  return {
    handleChange,
  };
};

export default useExpireDateInput;
