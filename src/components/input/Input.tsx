import { ComponentProps } from 'react';
import { colors } from '../../constants/color';

const Input = ({
  onFull,
  style,
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
      style={{
        backgroundColor: 'transparent',
        padding: '0.75rem',
        fontWeight: 'bold',
        width: '100%',
        color: colors.mint,
        border: 'none',
        textAlign: 'center',
        boxSizing: 'border-box',
        ...style,
      }}
      {...props}
      onChange={handleFull}
    />
  );
};

export default Input;
