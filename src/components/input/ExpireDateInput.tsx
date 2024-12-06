import React, { ComponentProps, useEffect } from 'react';
import InputBox from './InputBox';
import Input from './Input';
import { handleFull } from './util/InputUtil';

interface ExpireDateInputProps {
  onFull?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (v: string) => void;
}
const ExpireDateInput = ({
  onChange,
  onFull,
  ...props
}: Omit<ComponentProps<'input'>, 'onChange'> & ExpireDateInputProps) => {
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
  return (
    <InputBox className="flex items-center max-w-40">
      <Input
        maxLength={2}
        onFull={handleFull}
        name="input1"
        className="text-center"
        onChange={handleChange}
      />
      /
      <Input
        maxLength={2}
        onFull={handleFull}
        name="input2"
        className="text-center"
        onChange={handleChange}
        onBlur={props?.onBlur}
      />
    </InputBox>
  );
};

export default ExpireDateInput;
