import { ChangeEvent, useCallback } from 'react';

export interface HostileComponentProps {
  value: string;
  onChange: (value: string) => void;
}

export const HostileComponent = ({
  value,
  onChange,
}: HostileComponentProps) => {
  if (process.env.NODE_ENV === 'test') {
    throw new Error("I don't work if I'm tested.");
  }

  const handleOnChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      onChange(ev.target.value);
    },
    [onChange]
  );

  const handleOnAppendCatsClick = useCallback(() => {
    onChange(`${value}cats`);
  }, [onChange, value]);

  return (
    <div>
      <input type="text" value={value} onChange={handleOnChange} />
      <button type="button" onClick={handleOnAppendCatsClick}>
        Append Cats
      </button>
    </div>
  );
};
