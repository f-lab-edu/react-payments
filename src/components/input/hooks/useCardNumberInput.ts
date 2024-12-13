import React, { useEffect } from 'react';

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

  useEffect(() => {
    onChange?.(`${value.input1}${value.input2}${value.input3}${value.input4}`);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return {
    value,
    handleChange,
  };
};

export default useCardNumberInput;
