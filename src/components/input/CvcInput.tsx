import React, { useEffect } from 'react';
import NumberKeyPad from '../drawer/NumberKeyPad';
import InputBox from './InputBox';
import Input from './Input';
import useCvcInput from './hooks/useCvcInput';

interface CvcInputProps {
  onChange: (value: string) => void;
}
const CvcInput = ({ onChange }: CvcInputProps) => {
  const { isOpen, setIsOpen, value, setValue } = useCvcInput({ onChange });

  return (
    <div>
      <InputBox className="w-14">
        <Input
          value={value}
          className="text-center"
          type="password"
          onFocus={() => setIsOpen(true)}
        />
      </InputBox>
      <NumberKeyPad
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        maxLength={3}
        callback={(v) => setValue(v)}
      />
    </div>
  );
};

export default CvcInput;
