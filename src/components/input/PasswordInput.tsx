import Input from './Input';
import InputBox from './InputBox';
import NumberKeyPad from '../drawer/NumberKeyPad';
import usePasswordInput from './hooks/usePasswordInput';
import useToggle from './hooks/useToggle';

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
    <div className="flex gap-3 items-center ">
      <InputBox className="w-12">
        <Input {...passwordProps} value={firstValue} />
      </InputBox>
      <InputBox className="w-12">
        <Input {...passwordProps} value={secondValue} />
      </InputBox>
      <div className="w-1 aspect-square rounded-full bg-mint mx-4" />
      <div className="w-1 aspect-square rounded-full bg-mint mx-4" />
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
