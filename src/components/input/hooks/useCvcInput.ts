import React from 'react';

interface UseCvcInputProps {
  onChange?: (v: string) => void;
}
const useCvcInput = ({ onChange }: UseCvcInputProps) => {
  const [value, setValue] = React.useState('');

  const update = (v: string) => {
    setValue(v);
    onChange?.(v);
  };

  return {
    value,
    update,
  };
};

export default useCvcInput;
