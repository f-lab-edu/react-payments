import { ComponentProps } from 'react';

const Input = ({
  onFull,
  className,
  ...props
}: {
  onFull?: React.ChangeEventHandler<HTMLInputElement>;
} & ComponentProps<'input'>) => {
  if (onFull && !props.maxLength)
    throw new Error('onFull 이벤트를 사용하려면 maxLength를 설정해주세요.');
  const handleFull = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e);
    if (onFull && e.target.value.length === Number(props.maxLength)) onFull(e);
  };
  return (
    <input
      className={`bg-transparent p-3 text-mint font-bold w-full ${className}`}
      {...props}
      onChange={handleFull}
    />
  );
};

export default Input;
