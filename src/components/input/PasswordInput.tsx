import React, { useEffect } from 'react';
import Input from './Input';
import InputBox from './InputBox';
import NumberKeyPad from '../drawer/NumberKeyPad';
interface PasswordInputProps {
  onChange: (value: string) => void;
}
const PasswordInput = ({ onChange }: PasswordInputProps) => {
  const [numberDrawerOpen, setNumberDrawerOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  useEffect(() => {
    onChange(value);
  }, [value]);
  return (
    <div className="flex gap-3 items-center ">
      <InputBox className="w-12">
        <Input
          maxLength={1}
          type="password"
          className="text-center"
          onFocus={() => setNumberDrawerOpen(true)}
          value={value.length > 0 ? value.substring(0, 1) : ''}
        />
      </InputBox>
      <InputBox className="w-12">
        <Input
          maxLength={1}
          type="password"
          className="text-center"
          onFocus={() => setNumberDrawerOpen(true)}
          value={value.length > 1 ? value.substring(1, 2) : ''}
        />
      </InputBox>
      <div className="w-1 aspect-square rounded-full bg-mint mx-4" />
      <div className="w-1 aspect-square rounded-full bg-mint mx-4" />
      <NumberKeyPad
        isOpen={numberDrawerOpen}
        setIsOpen={setNumberDrawerOpen}
        maxLength={2}
        callback={setValue}
      />
    </div>
  );
};

export default PasswordInput;
