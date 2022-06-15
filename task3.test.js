const Calculator = require('./task3.js');

describe('sum tests', () => {
  test('tests sum(1,-5) to be -4', () => {
    expect(Calculator.sum(1, -5)).toBe(-4);
  });

  test('tests sum(-1,0) to be -1', () => {
    expect(Calculator.sum(-1, 0)).toBe(-1);
  });

  test('tests sum(23423425345,234523452452) to be 257946877797', () => {
    expect(Calculator.sum(23423425345, 234523452452)).toBe(257946877797);
  });
});

describe('subtract tests', () => {
  test('tests subtract(1,-5) to be 6', () => {
    expect(Calculator.subtract(1, -5)).toBe(6);
  });

  test('tests subtract(-1,0) to be -1', () => {
    expect(Calculator.subtract(-1, 0)).toBe(-1);
  });

  test('tests subtract(23423425345,234523452452) to be -211100027107', () => {
    expect(Calculator.subtract(23423425345, 234523452452)).toBe(-211100027107);
  });
});

describe('multiply tests', () => {
  test('tests multiply(1,-5) to be -5', () => {
    expect(Calculator.multiply(1, -5)).toBe(-5);
  });

  test('tests multiply(-1,0) to be 0', () => {
    expect(Calculator.multiply(-1, 0)).toBe(0);
  });

  test('tests multiply(23423425345,234523452452) to be ', () => {
    expect(Calculator.multiply(23423425345, 234523452452)).toBeCloseTo(5.493342580161079e+21);
  });
});

describe('division tests', () => {
  test('tests divide(1,-5) to be -0.2', () => {
    expect(Calculator.divide(1, -5)).toBeCloseTo(-0.2);
  });

  test('tests divide(-1,0) to throw an error', () => {
    expect(() => Calculator.divide(-1, 0)).toThrow('Divide by zero error');
  });

  test('tests divide(23423425345,234523452452) to be 257946877797', () => {
    expect(Calculator.divide(23423425345, 234523452452)).toBeCloseTo(0.1);
  });
});