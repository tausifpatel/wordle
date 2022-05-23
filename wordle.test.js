const wordle = require('./wordle');

test('returns all 0 when no matching characters found', () => {
  expect(wordle("ropes", "child")).toBe("00000");
});

test('returns 2 when character matches in correct position', () => {
  expect(wordle("alert", "alarm")).toBe("22020");
});

test('returns 1 when character matches in incorrect position', () => {
  expect(wordle("stair", "chore")).toBe("00010");
});

test('returns correct result when characters are mix of match and wrong position', () => {
  expect(wordle("hairy", "charm")).toBe("01120");
});

test('returns correct result when multiple characters in wrong positions', () => {
  expect(wordle("reads", "elect")).toBe("10000");
});