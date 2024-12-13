import React, { useEffect } from 'react';
interface UsePasswordInputProps {
  onChange?: (v: string) => void;
}
const usePasswordInput = ({ onChange }: UsePasswordInputProps) => {
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

export default usePasswordInput;
