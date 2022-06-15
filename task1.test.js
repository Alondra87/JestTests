const stringLength = require('./task1.js');

test('tests "" to throw error', () => {
  expect(() => stringLength('')).toThrow('Not at least 1 char long!');
});

test('tests "abc\'d" to yield 5', () => {
  expect(stringLength('abc\'d')).toBe(5);
});

test('tests "  98765432" to yield 10', () => {
  expect(stringLength('  98765432')).toBe(10);
});

test('tests "  987654321" to throw error', () => {
  expect(() => stringLength('  987654321')).toThrow('More than 10 chars long!');
});