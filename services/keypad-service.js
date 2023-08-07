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

  updateOperator() {
    this.calcObj.previousOperator = this.calcObj.currentOperator;
  }

  updateDisplayResult() {
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

  updateDisplayCurrent() {
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
}

export default Keypad
