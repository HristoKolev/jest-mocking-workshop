import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';

import { Component2 } from '~exercise2/Component2';
import {
  countSelector,
  exerciseActions,
  isEvenSelector,
} from '~exercise2/exerciseSlice';

jest.mock('react-redux', () => {
  const dispatchMock = jest.fn();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatchMock,
    useSelector: jest.fn(),
  };
});

const dispatchMock: jest.Mock = useDispatch();
const useSelectorMock: jest.Mock = useSelector as jest.Mock;

test('works', async () => {
  const user = userEvent.setup();

  useSelectorMock.mockImplementation((selector) => {
    switch (selector) {
      case countSelector: {
        return 42;
      }
      case isEvenSelector: {
        return true;
      }
      default: {
        throw new Error('There is no mock implementation for this selector.');
      }
    }
  });

  const { rerender } = render(<Component2 />);

  expect(screen.getByTestId('count')).toHaveTextContent('42');
  expect(screen.getByTestId('is-even')).toHaveTextContent('Yes');

  await user.click(screen.getByRole('button', { name: 'Increment' }));
  expect(dispatchMock).toHaveBeenCalledTimes(1);
  expect(dispatchMock).toHaveBeenCalledWith(exerciseActions.increment());

  useSelectorMock.mockImplementation((selector) => {
    switch (selector) {
      case countSelector: {
        return 43;
      }
      case isEvenSelector: {
        return false;
      }
      default: {
        throw new Error('There is no mock implementation for this selector.');
      }
    }
  });

  rerender(<Component2 />);

  expect(screen.getByTestId('count')).toHaveTextContent('43');
  expect(screen.getByTestId('is-even')).toHaveTextContent('No');

  dispatchMock.mockReset();

  await user.click(screen.getByRole('button', { name: 'Decrement' }));
  expect(dispatchMock).toHaveBeenCalledTimes(1);
  expect(dispatchMock).toHaveBeenCalledWith(exerciseActions.decrement());
});
