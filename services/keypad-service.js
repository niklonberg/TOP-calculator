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

  updateDisplayResult(calculationInProgress = false) {
    if (calculationInProgress) {
      this.display.result.textContent = 
      `${this.calcObj.previousValue} ${this.calcObj.previousOperator} ${this.calcObj.currentValue} =`;
    } else {
      this.display.result.textContent = 
      `${this.calcObj.currentValue} ${this.calcObj.currentOperator}`;
    }
  }

  updateDisplayCurrent() {
    
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
    this.calcObj.isGoing = false;
  }
  
  clearDisplay() {
    this.display.result.textContent = "";
    this.display.current.textContent = "";
  }
}



export default Keypad
