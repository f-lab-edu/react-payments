import NumberKeyPad from '../drawer/NumberKeyPad';
import InputBox from './InputBox';
import Input from './Input';
import useCvcInput from './hooks/useCvcInput';
import useToggle from './hooks/useToggle';

interface CvcInputProps {
  onChange: (value: string) => void;
}
const CvcInput = ({ onChange }: CvcInputProps) => {
  const { value, update } = useCvcInput({ onChange });
  const { isOpen, open, close } = useToggle();
  return (
    <div>
      <InputBox className="w-14">
        <Input
          value={value}
          className="text-center"
          type="password"
          onFocus={open}
        />
      </InputBox>
      <NumberKeyPad
        isOpen={isOpen}
        close={close}
        maxLength={3}
        callback={update}
      />
    </div>
  );
};

export default CvcInput;
