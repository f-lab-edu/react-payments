import InputBox from './InputBox';
import Input from './Input';
import { handleFull } from './util/InputUtil';

const ExpireDateInput = () => {
  return (
    <InputBox className="flex items-center">
      <Input maxLength={2} onFull={handleFull} className="text-center" />
      -
      <Input maxLength={2} onFull={handleFull} className="text-center" />
    </InputBox>
  );
};

export default ExpireDateInput;
