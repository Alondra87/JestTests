class Calculator {
    static sum = (a, b) => a + b;
  
    static subtract = (a, b) => a - b;
  
    static multiply = (a, b) => {
      if (a == 0 || b == 0) { return 0; }
      return a * b;
    }
  
    static divide = (a, b) => {
      if (b == 0) {
        throw new Error('Divide by zero error');
      } else {
        return a / b;
      }
    }
  }
  
  module.exports = Calculator;