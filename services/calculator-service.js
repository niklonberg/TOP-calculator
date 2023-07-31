class Calculator {
  constructor() {
  }

  add(calcObj) {
    return calcObj[previousValue] + calcObj[currentValue];
  }

  subtract(calcObj) {
    return calcObj[previousValue] - calcObj[currentValue];
  }

  divide(calcObj) {
    return calcObj[previousValue] / calcObj[currentValue];
  }

  multiply(calcObj) {
    return calcObj[previousValue] * calcObj[currentValue];
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
