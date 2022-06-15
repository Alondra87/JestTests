const reverseString = require('./task2.js');

test('tests "\n view" to yield "weiv \n"', () => {
  expect(reverseString('\n view')).toBe('weiv \n');
});