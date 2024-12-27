import { ComponentProps } from 'react';
import Input from './Input';
import InputBox from './InputBox';
import { handleFull } from './util/InputUtil';
import React from 'react';
import useCardNumberInput from './hooks/useCardNumberInput';
const CardNumberInput = ({
  onChange,
  onFull,
}: Omit<ComponentProps<'input'>, 'onChange'> & {
  onFull?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (v: string) => void;
}) => {
  const { value, handleChange } = useCardNumberInput({ onChange });

  return (
    <InputBox style={{ display: 'flex', alignItems: 'center' }}>
      <Input
        maxLength={4}
        onFull={handleFull}
        style={{ textAlign: 'center' }}
        name="input1"
        value={value.input1}
        onChange={handleChange}
      />
      -
      <Input
        maxLength={4}
        onFull={handleFull}
        style={{ textAlign: 'center' }}
        name="input2"
        value={value.input2}
        onChange={handleChange}
      />
      -
      <Input
        type="password"
        maxLength={4}
        onFull={handleFull}
        style={{ textAlign: 'center' }}
        name="input3"
        value={value.input3}
        onChange={handleChange}
      />
      -
      <Input
        type="password"
        maxLength={4}
        onFull={onFull}
        style={{ textAlign: 'center' }}
        name="input4"
        value={value.input4}
        onChange={handleChange}
      />
    </InputBox>
  );
};

export default CardNumberInput;
