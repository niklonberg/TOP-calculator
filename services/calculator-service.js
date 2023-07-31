class Calculator {
  constructor() {
  }

  add(calcObj) {
    return calcObj[0] + calcObj[1];
  }

  subtract(calcObj) {
    return calcObj[0] - calcObj[1];
  }

  divide(calcObj) {
    return calcObj[0] / calcObj[1];
  }

  multiply(calcObj) {
    return calcObj[0] * calcObj[1];
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
