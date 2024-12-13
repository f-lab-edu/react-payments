import { useEffect } from 'react';
import Input from './Input';
import InputBox from './InputBox';
import React from 'react';

interface NameInputProps {
  onChange?: (v: string) => void;
  maxLength?: number;
}
const NameInput = ({ onChange, maxLength = 30 }: NameInputProps) => {
  const [value, setValue] = React.useState('');
  useEffect(() => {
    onChange?.(value);
  }, [value]);
  return (
    <InputBox>
      <Input
        type="text"
        placeholder="카드 소유자"
        value={value}
        onChange={(v) => setValue(v.target.value)}
        maxLength={maxLength}
      />
    </InputBox>
  );
};

export default NameInput;
