import React from 'react';
interface UsePasswordInputProps {
  onChange?: (v: string) => void;
}
const usePasswordInput = ({ onChange }: UsePasswordInputProps) => {
  const [firstValue, setFirstValue] = React.useState('');
  const [secondValue, setSecondValue] = React.useState('');

  return {
    firstValue,
    secondValue,
    update: (value: string) => {
      //글자를 쪼개서 넣기
      onChange?.(value);
      const [first, second] = value.split('');
      setFirstValue(first);
      setSecondValue(second);
    },
  };
};

export default usePasswordInput;
