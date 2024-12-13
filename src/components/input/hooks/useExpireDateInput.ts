import React, { useEffect } from 'react';

interface UseExpireDateInputProps {
  onChange?: (v: string) => void;
}
const useExpireDateInput = ({ onChange }: UseExpireDateInputProps) => {
  const [value, setValue] = React.useState({
    input1: '',
    input2: '',
  });

  useEffect(() => {
    onChange?.(`${value.input1}${value.input2}`);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  return {
    handleChange,
  };
};

export default useExpireDateInput;
