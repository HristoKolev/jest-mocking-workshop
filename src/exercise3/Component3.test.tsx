import { act, render, screen } from '@testing-library/react';

import { Component3 } from '~exercise3/Component3';
import { HostileComponentProps } from '~exercise3/HostileComponent';

let hostileComponentProps: HostileComponentProps;
jest.mock('./HostileComponent', () => ({
  HostileComponent: (props: HostileComponentProps) => {
    hostileComponentProps = props;
    return null;
  },
}));

test('the displayed value changes when the user types it in the input', () => {
  render(<Component3 />);

  expect(screen.getByTestId('value')).toHaveTextContent('');

  act(() => {
    hostileComponentProps.onChange('changed value');
  });

  expect(screen.getByTestId('value')).toHaveTextContent('changed value');
});
