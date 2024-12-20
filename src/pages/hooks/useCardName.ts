import React, { ChangeEvent } from 'react';

export const DEFAULT_MAX_SIZE = 30;

const useCardName = (
  maxSize = DEFAULT_MAX_SIZE,
  onChange: (v: string) => void
) => {
  const [name, setName] = React.useState('');
  const size = `${name.length} / ${maxSize}`;
  const handleNameChange = (v: string | ChangeEvent<HTMLInputElement>) => {
    const currentValue = typeof v === 'string' ? v : v.target.value;
    const limitedValue = currentValue.slice(0, maxSize);
    setName(limitedValue);
    onChange?.(limitedValue);
  };

  return { name, size, onChange: handleNameChange };
};

export default useCardName;
