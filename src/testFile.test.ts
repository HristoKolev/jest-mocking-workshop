import { formatDate } from '~helpers/date-helpers';

test('formats dates correctly', () => {
  expect(formatDate(new Date())).toEqual('');
});
