import React, { ComponentProps, PropsWithChildren, useEffect } from 'react';
import Drawer from './Drawer';
interface NumberKeyPadProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  maxLength: number;
  callback: (value: string) => void;
}
const NumberKeyPad = ({
  isOpen,
  setIsOpen,
  maxLength,
  callback,
}: NumberKeyPadProps) => {
  const [value, setValue] = React.useState('');
  useEffect(() => {
    if (!isOpen) setValue('');
  }, [isOpen]);
  useEffect(() => {
    if (value.length === maxLength) {
      setIsOpen(false);
      callback(value);
    }
  }, [value]);
  return (
    <Drawer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="grid grid-cols-3 gap-1 bg-white p-3"
    >
      {[...Array(10).keys()].map((i) => (
        <KeyPad key={i} onClick={() => setValue((p) => p.concat(i.toString()))}>
          {i}
        </KeyPad>
      ))}
    </Drawer>
  );
};

const KeyPad = ({
  children,
  ...props
}: ComponentProps<'button'> & PropsWithChildren) => (
  <button
    className="text-mint border text-center p-3 rounded-lg shadow-md hover:text-white hover:bg-mint"
    {...props}
  >
    {children}
  </button>
);

export default NumberKeyPad;
