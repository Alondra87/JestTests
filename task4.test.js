const capitalize = require('./task4.js');

test('tests for error on no string', () => {
  expect(() => capitalize(null)).toThrow('No string given');
});

test('tests for error on no string', () => {
  expect(() => capitalize(undefined)).toThrow('No string given');
});

test('tests for error on no string', () => {
  expect(() => capitalize([5, 6])).toThrow('No string given');
});

test('tests for error on no string', () => {
  expect(() => capitalize({ name: 'John', age: 46 })).toThrow('No string given');
});

test('tests capitalize "jota" to be "Jota"', () => {
  expect(capitalize('jota')).toBe('Jota');
});

test('tests capitalize "" to be ""', () => {
  expect(capitalize('')).toBe('');
});

test('tests capitalize(5) to throw error', () => {
  expect(() => capitalize(5)).toThrow('No string given');
});

test('tests capitalize("5") to be "5"', () => {
  expect(capitalize('5')).toBe('5');
});