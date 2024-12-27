import React, { ComponentProps, PropsWithChildren, useEffect } from 'react';
import Drawer from './Drawer';
import { colors } from '../../constants/color';
interface NumberKeyPadProps {
  isOpen: boolean;
  close: () => void;
  maxLength: number;
  callback: (value: string) => void;
}
const NumberKeyPad = ({
  isOpen,
  maxLength,
  callback,
  close,
}: NumberKeyPadProps) => {
  const [value, setValue] = React.useState('');
  useEffect(() => {
    if (!isOpen) setValue('');
  }, [isOpen]);
  useEffect(() => {
    if (value.length === maxLength) {
      close();
      callback(value);
    }
  }, [value]);
  return (
    <Drawer
      isOpen={isOpen}
      setIsOpen={close}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.25rem',
        backgroundColor: 'white',
        padding: '0.5rem',
        boxSizing: 'border-box',
      }}
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
    style={{
      color: colors.mint,
      backgroundColor: 'white',
      border: '1px solid #E0E0E0',
      padding: '0.5rem',
      boxSizing: 'border-box',
      borderRadius: '0.5rem',
      boxShadow: '0 0 0.25rem rgba(0, 0, 0, 0.1)',
    }}
    {...props}
  >
    {children}
  </button>
);

export default NumberKeyPad;
