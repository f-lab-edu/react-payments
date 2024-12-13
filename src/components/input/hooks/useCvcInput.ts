import React, { useEffect } from 'react';

interface UseCvcInputProps {
  onChange?: (v: string) => void;
}
const useCvcInput = ({ onChange }: UseCvcInputProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  useEffect(() => {
    onChange?.(value);
  }, [value]);

  return {
    isOpen,
    setIsOpen,
    value,
    setValue,
  };
};

export default useCvcInput;
