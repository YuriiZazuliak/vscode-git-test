import { getEvenNumbers } from './script.js';

it('17 is 17', () => {
  expect(17).toEqual(17);
});
it('18 not Eaquel 17', () => {
  expect(18).not.toEqual(17);
});
it('return even numbers', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(result).toEqual([2, 4, 6, 8]);
});
