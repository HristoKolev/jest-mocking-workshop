export const getRandomNumber = (from: number, to: number) =>
  Math.floor(Math.random() * (to - from)) + from;

export const title = 'Random number generator';

export default () =>
  new Date().toLocaleString('en-GB', {
    day: '2-digit',
    year: 'numeric',
    month: 'short',
  });
