class Calculator {
  constructor() {
  }

  add(calcObj) {
    return calcObj.num1 + calcObj.num2;
  }

  subtract(calcObj) {
    return calcObj.num1 - calcObj.num2;
  }

  divide(calcObj) {
    return calcObj.num1 / calcObj.num2;
  }

  multiply(calcObj) {
    return calcObj.num1 * calcObj.num2;
  }

  calculate(calcObj) {
    switch (calcObj.operator) {
      case '+':
        return this.add(calcObj);

      case '-':
        return this.subtract(calcObj);

      case '%':
        return this.divide(calcObj);
        
      case 'x':
        return this.multiply(calcObj)
    }
  }
}
/* consider changing parameters to an object with num1, num2, & operator keys */

export default Calculator;
