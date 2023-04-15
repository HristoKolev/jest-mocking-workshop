import getDate, { title, getRandomNumber } from './helpers';

export const Component1 = (): JSX.Element => (
  <div>
    <div data-testid="title">Title: {title}</div>
    <div data-testid="random-number">Number: {getRandomNumber(1, 20)}</div>
    <div data-testid="current-date">Date: {getDate()}</div>
  </div>
);
