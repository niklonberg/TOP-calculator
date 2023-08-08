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

  power(calcObj, usePreviousValue = false) {
    if (usePreviousValue) {
      calcObj.previousValue = calcObj.previousValue * calcObj.previousValue;
    } else {
      calcObj.currentValue = calcObj.currentValue * calcObj.currentValue;
    }
  }

  factorial(calcObj, usePreviousValue = false) {
    let value = 'currentValue';

    if (usePreviousValue) {
      value = 'previousValue';
    }

    let num = calcObj[value];
    let result = 1;

    if (num === 0 || num === 1) {
      calcObj[value] = result;
    } else {
      for (let i = num; i >= 1; i--) {
        console.log(result)
        result *= i;
      }
      calcObj[value] = result;
    }
  }

  plusMinus(calcObj, usePreviousValue = false) {
    if (usePreviousValue) {
      if (calcObj.previousValue > 0) {
        calcObj.previousValue = -(calcObj.previousValue);
      } else {
        calcObj.previousValue = calcObj.previousValue * -1;
      }
    } else {
      if (calcObj.currentValue > 0) {
        calcObj.currentValue = -(calcObj.currentValue);
      } else {
        calcObj.currentValue = calcObj.currentValue * -1;
      }
    }
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
