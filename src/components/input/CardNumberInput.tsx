import { ComponentProps, useEffect } from 'react';
import Input from './Input';
import InputBox from './InputBox';
import { handleFull } from './util/InputUtil';
import React from 'react';
const CardNumberInput = ({
  onChange,
  onFull,
}: Omit<ComponentProps<'input'>, 'onChange'> & {
  onFull?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (v: string) => void;
}) => {
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

  return (
    <InputBox className="flex items-center">
      <Input
        maxLength={4}
        onFull={handleFull}
        className="text-center"
        name="input1"
        value={value.input1}
        onChange={handleChange}
      />
      -
      <Input
        maxLength={4}
        onFull={handleFull}
        className="text-center"
        name="input2"
        value={value.input2}
        onChange={handleChange}
      />
      -
      <Input
        type="password"
        maxLength={4}
        onFull={handleFull}
        className="text-center"
        name="input3"
        value={value.input3}
        onChange={handleChange}
      />
      -
      <Input
        type="password"
        maxLength={4}
        onFull={onFull}
        className="text-center"
        name="input4"
        value={value.input4}
        onChange={handleChange}
      />
    </InputBox>
  );
};

export default CardNumberInput;
