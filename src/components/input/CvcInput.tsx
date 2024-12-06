import React, { useEffect } from 'react';
import NumberKeyPad from '../drawer/NumberKeyPad';
import InputBox from './InputBox';
import Input from './Input';

interface CvcInputProps {
  onChange: (value: string) => void;
}
const CvcInput = ({ onChange }: CvcInputProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  useEffect(() => {
    onChange(value);
  }, [value]);

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
