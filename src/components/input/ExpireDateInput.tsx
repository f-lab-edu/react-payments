import React, { ComponentProps } from 'react';
import InputBox from './InputBox';
import Input from './Input';
import { handleFull } from './util/InputUtil';
import useExpireDateInput from './hooks/useExpireDateInput';

interface ExpireDateInputProps {
  onFull?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (v: string) => void;
}
const ExpireDateInput = ({
  onChange,
  onFull,
  ...props
}: Omit<ComponentProps<'input'>, 'onChange'> & ExpireDateInputProps) => {
  const { handleChange } = useExpireDateInput({ onChange });
  return (
    <InputBox
      style={{ display: 'flex', alignItems: 'center', maxWidth: '10rem' }}
    >
      <Input
        maxLength={2}
        onFull={handleFull}
        name="input1"
        style={{ textAlign: 'center' }}
        onChange={handleChange}
      />
      /
      <Input
        maxLength={2}
        onFull={onFull}
        name="input2"
        style={{ textAlign: 'center' }}
        onChange={handleChange}
        onBlur={props?.onBlur}
      />
    </InputBox>
  );
};

export default ExpireDateInput;
