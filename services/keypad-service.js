class Keypad {
  constructor(display, calcObj) {
    this.display = display;
    this.calcObj = calcObj;
  }

  addNumber(number) {
    this.display.current.textContent += number;
  }

  addDecimal() {
    this.display.current.textContent += ".";
  }

  removeOneCharacter() {
    this.display.current.textContent = this.display.current.textContent.slice(0, -1);
  }

  updateCurrentValue() {
    this.calcObj.currentValue = Number(this.display.current.textContent);
  }

  updateDisplayCurrent() {
    if (this.calcObj.currentValue === 0) {
      this.display.current.textContent = this.calcObj.previousValue;
    } else {
      this.display.current.textContent = this.calcObj.currentValue;
    }
  }

  updateOperator() {
    this.calcObj.previousOperator = this.calcObj.currentOperator;
  }

  showPreviousCalculation() {
    const operator = this.calcObj.currentOperator;

    if (operator === "=") {
      this.display.result.textContent = 
      `${this.calcObj.previousValue} ${this.calcObj.previousOperator} ${this.calcObj.currentValue} =`;
      console.log('first')
    } else {
      this.display.result.textContent = 
      `${this.calcObj.previousValue} ${this.calcObj.currentOperator}`;
      console.log('second')
    }
  }

  setDisplayCurrentToResult() {
    this.display.current.textContent = this.calcObj.previousValue;
  }

  resetCurrentValue() {
    this.calcObj.currentValue = 0;
  }

  resetDisplayCurrent() {
    this.display.current.textContent = "";
  }

  resetCalculator() {
    this.calcObj.previousValue = 0;
    this.calcObj.currentValue = 0;
    this.calcObj.previousOperator = "";
    this.calcObj.currentOperator = "";
  }
  
  resetDisplay() {
    this.display.result.textContent = "";
    this.display.current.textContent = "";
  }

  showMathError() {
    this.display.current.textContent = "MathError";
  }
}

export default Keypad
