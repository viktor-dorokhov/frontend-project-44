import { getRandomNumber, getRandomProgression, gcd, isPrime } from '../src/util.js';
import * as config from '../src/config.js';

const numberRangeFrom = config.numberRange.from;
const numberRangeTo = config.numberRange.to;
const minProgressionLength = config.minProgressionLength;
const maxProgressionLength = config.maxProgressionLength;

test.each([
  getRandomNumber(),
  getRandomNumber(),
  getRandomNumber(),
])('getRandomNumber', (randomNumber) => {
  expect(randomNumber).toBeGreaterThanOrEqual(numberRangeFrom);
  expect(randomNumber).toBeLessThanOrEqual(numberRangeTo);
  expect(Number.isInteger(randomNumber)).toBe(true);
});

test.each([
  [getRandomProgression()],
  [getRandomProgression()],
  [getRandomProgression()],
])('getRandomProgression', (randomProgression) => {
  const progressionLength = randomProgression.length;
  expect(progressionLength).toBeGreaterThanOrEqual(minProgressionLength);
  expect(progressionLength).toBeLessThanOrEqual(maxProgressionLength);
  const first = randomProgression.at(0);
  const last = randomProgression.at(-1);
  expect(last - first).toBeGreaterThanOrEqual(0);
  expect(Number.isInteger((last - first) / (progressionLength - 1))).toBe(true);
});

test('gcd', () => {
  expect(gcd(1, 1)).toEqual(1);
  expect(gcd(10, 10)).toEqual(10);
  expect(gcd(2, 60)).toEqual(2);
  expect(gcd(60, 2)).toEqual(2);
  expect(gcd(55)).toEqual(55);
  expect(gcd(34, 51)).toEqual(17);
  expect(gcd(6, 81)).toEqual(3);
});

test('isPrime', () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(11)).toBe(true);
  expect(isPrime(33)).toBe(false);
  expect(isPrime(53)).toBe(true);
});
