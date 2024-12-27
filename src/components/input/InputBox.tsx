import { PropsWithChildren } from 'react';

const InputBox = ({
  style,
  children,
}: PropsWithChildren & { style?: React.CSSProperties }) => {
  return (
    <div
      style={{ backgroundColor: '#F2F2F2', borderRadius: '0.5rem', ...style }}
    >
      {children}
    </div>
  );
};

export default InputBox;
