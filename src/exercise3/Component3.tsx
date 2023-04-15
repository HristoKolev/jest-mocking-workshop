import { useCallback, useState } from 'react';

import { HostileComponent } from '~exercise3/HostileComponent';

export const Component3 = (): JSX.Element => {
  const [value, setValue] = useState<string | undefined>();
  const handleOnChange = useCallback((val: string) => setValue(val), []);
  return (
    <div>
      <HostileComponent value={value || ''} onChange={handleOnChange} />
      <div data-testid="value">{value || ''}</div>
    </div>
  );
};
