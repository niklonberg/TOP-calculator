class Calculator {
  constructor() {
  }

  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return this.add(num1, num2);

      case '-':
        return this.subtract(num1, num2);

      case '%':
        return this.divide(num1, num2);
        
      case 'x':
        return this.multiply(num1, num2)
    }
  }
}
/* consider changing parameters to an object with num1, num2, & operator keys */

export default Calculator;
