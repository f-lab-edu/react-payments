import Input from './Input';
import InputBox from './InputBox';
import React from 'react';

interface NameInputProps {
  onChange?: (v: string) => void;
  maxLength?: number;
}
const NameInput = ({ onChange, maxLength = 30 }: NameInputProps) => {
  const [value, setValue] = React.useState('');

  const handleChange = (v: string) => {
    setValue(v);
    onChange?.(v);
  };
  return (
    <InputBox>
      <Input
        type="text"
        placeholder="카드 소유자"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        maxLength={maxLength}
      />
    </InputBox>
  );
};

export default NameInput;
