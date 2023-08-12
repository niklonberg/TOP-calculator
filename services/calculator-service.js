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

  power(calcObj) {
    return calcObj.previousValue ** calcObj.currentValue;
  }

  roundToFive(result) {
    return +(Math.round(result + "e+5") + "e-5");
  }

  unaryOperation(calcObj, operation, usePreviousValue = false) {
    let value = usePreviousValue ? 'previousValue' : 'currentValue';

    switch (operation) {
      case 'factorial':
        let num = calcObj[value];
        let result = 1;

        if (num === 0 || num === 1) {
          calcObj[value] = result;
        } else {
          for (let i = num; i >= 1; i--) {
            result *= i;
          }
          calcObj[value] = result;
        }
        break;
      
      case 'plus_minus':
        if (calcObj[value] > 0) {
          calcObj[value] = -(calcObj[value])
        } else {
          calcObj[value] = calcObj[value] * -1;
        }
        break;

      default:
        break;
    }
  }

  calculate(calcObj) {
    switch (calcObj.previousOperator) {
      case '+':
        return this.add(calcObj);

      case '-':
        return this.subtract(calcObj);

      case '/':
        return this.divide(calcObj);
        
      case 'x':
        return this.multiply(calcObj);

      case '^':
        return this.power(calcObj);
    }
  }
}

export default Calculator;
