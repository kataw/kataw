import { pickRandomOne } from './common';

test("unit tests for 'pickRandomOne'", () => {
  const rnd = pickRandomOne([1, 2, 3]);
  expect(typeof rnd).toBe('number');
  expect(rnd).toBeGreaterThanOrEqual(1);
  expect(rnd).toBeLessThanOrEqual(3);
});
