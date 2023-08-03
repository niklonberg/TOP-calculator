class Keypad {
  constructor(display, calcObj) {
    this.display = display;
    this.calcObj = calcObj;
  }

  updateOperator() {
    this.calcObj.previousOperator = this.calcObj.currentOperator;
  }

  resetCalculator() {
    this.calcObj.previousValue = 0;
    this.calcObj.currentValue = 0;
    this.calcObj.previousOperator = "";
    this.calcObj.currentOperator = "";
    this.calcObj.isGoing = false;
  }
  
  clearDisplay() {
    this.display.last.textContent = "";
    this.display.current.textContent = "";
  }
}

export default Keypad
