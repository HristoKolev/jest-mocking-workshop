beforeEach(() => {
  jest.resetModules();
  jest.doMock('~helpers/date-helpers');
});

test('formats dates correctly', async () => {
  const { formatDate } = await import('~helpers/date-helpers');
  expect(formatDate(new Date())).toEqual('mock implementation');
});

test('formats dates correctly 2', async () => {
  jest.doMock('~helpers/date-helpers', () => ({
    __esModule: true,
    ...jest.requireActual('~helpers/date-helpers'),
    default: () => 'fake implementation 2',
    formatDate: () => 'fake implementation 2',
  }));

  const { formatDate } = await import('~helpers/date-helpers');
  expect(formatDate(new Date())).toEqual('fake implementation 2');
});
