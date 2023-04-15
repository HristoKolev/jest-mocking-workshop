import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  countSelector,
  exerciseActions,
  isEvenSelector,
} from '~exercise2/exerciseSlice';

export const Component2 = (): JSX.Element => {
  const dispatch = useDispatch();

  const count = useSelector(countSelector);
  const isEven = useSelector(isEvenSelector);

  const handleOnIncrement = useCallback(() => {
    dispatch(exerciseActions.increment());
  }, [dispatch]);

  const handleOnDecrement = useCallback(() => {
    dispatch(exerciseActions.decrement());
  }, [dispatch]);

  return (
    <div>
      <div data-testid="count">Count: {count}</div>
      <div data-testid="is-even">Is Even: {isEven ? 'Yes' : 'No'}</div>
      <div>
        <button type="button" onClick={handleOnIncrement}>
          Increment
        </button>
        <button type="button" onClick={handleOnDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};
