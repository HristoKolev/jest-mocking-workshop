import formatDate from '~helpers/date-helpers';

// jest.mock('~helpers/date-helpers');

// jest.mock('~helpers/date-helpers', () => ({
//   __esModule: true,
//   ...jest.requireActual('~helpers/date-helpers'),
//   default: () => 'fake implementation 2',
//   formatDate: () => 'fake implementation 2',
// }));

test('formats dates correctly', () => {
  expect(formatDate(new Date())).toEqual('original implementation');
});
