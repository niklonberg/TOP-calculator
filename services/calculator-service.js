class Calculator {
  constructor() {
  }

  add(calcObj) {
    return calcObj.previousValue + calcObj.currentValue;
  }

  subtract(calcObj) {
    return calcObj.previousValue - calcObj.currentValue;
  }

  divide(calcObj) {
    return calcObj.previousValue / calcObj.currentValue;
  }

  multiply(calcObj) {
    return calcObj.previousValue * calcObj.currentValue;
  }

  calculate(calcObj) {
    switch (calcObj.previousOperator) {
      case '+':
        return this.add(calcObj);

      case '-':
        return this.subtract(calcObj);

      case '%':
        return this.divide(calcObj);
        
      case 'x':
        return this.multiply(calcObj);

      case '=':
        return calcObj.currentValue;
    }
  }
}

export default Calculator;
