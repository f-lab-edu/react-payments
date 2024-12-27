import Input from './Input';
import InputBox from './InputBox';
import NumberKeyPad from '../drawer/NumberKeyPad';
import usePasswordInput from './hooks/usePasswordInput';
import useToggle from './hooks/useToggle';
import { colors } from '../../constants/color';

interface PasswordInputProps {
  onChange: (value: string) => void;
}

const PasswordInput = ({ onChange }: PasswordInputProps) => {
  const { firstValue, secondValue, update } = usePasswordInput({
    onChange,
  });

  const { isOpen, open, close } = useToggle();

  const passwordProps = {
    maxLength: 1,
    type: 'password',
    className: 'text-center',
    onFocus: open,
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center',
      }}
    >
      <InputBox style={{ width: '3rem' }}>
        <Input {...passwordProps} value={firstValue} />
      </InputBox>
      <InputBox style={{ width: '3rem' }}>
        <Input {...passwordProps} value={secondValue} />
      </InputBox>
      <div
        style={{
          width: '0.25rem',
          aspectRatio: '1/1',
          borderRadius: '50%',
          backgroundColor: colors.mint,
          margin: '0 0.5rem',
        }}
      />
      <div
        style={{
          width: '0.25rem',
          aspectRatio: '1/1',
          borderRadius: '50%',
          backgroundColor: colors.mint,
          margin: '0 0.5rem',
        }}
      />
      <NumberKeyPad
        isOpen={isOpen}
        maxLength={2}
        callback={update}
        close={close}
      />
    </div>
  );
};

export default PasswordInput;
