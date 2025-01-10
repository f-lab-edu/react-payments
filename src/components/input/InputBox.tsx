import { PropsWithChildren } from 'react';

const InputBox = ({
  className,
  children,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div className={`bg-gray-200 rounded-md ${className}`}>{children}</div>
  );
};

export default InputBox;
