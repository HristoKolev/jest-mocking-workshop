import { render } from '@testing-library/react';

import { Component3 } from '~exercise3/Component3';

test('the displayed value changes when the user types it in the input', () => {
  render(<Component3 />);
});
