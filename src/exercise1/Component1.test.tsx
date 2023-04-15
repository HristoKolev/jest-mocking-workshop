import { render, screen } from '@testing-library/react';

import { Component1 } from '~exercise1/Component1';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('./helpers', () => ({
  __esModule: true,
  ...jest.requireActual('./helpers'),
  getRandomNumber: () => 42,
  default: () => '01 Jan 2000',
}));

test('shows correct data', () => {
  render(<Component1 />);

  const titleElement = screen.getByTestId('title');
  expect(titleElement).toHaveTextContent('Title: Random number generator');

  const randomNumberElement = screen.getByTestId('random-number');
  expect(randomNumberElement).toHaveTextContent('42');

  const currentDateElement = screen.getByTestId('current-date');
  expect(currentDateElement).toHaveTextContent('01 Jan 2000');
});
