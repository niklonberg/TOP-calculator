/* imports */
import Calculator from "../services/calculator-service.js";
import Keypad from "../services/keypad-service.js"

/* Calculation object */
const calcObj = {
  previousValue: 0,
  currentValue: 0,
  previousOperator: "",
  currentOperator : "",
  isGoing: false,
}

/* references */

  /* display */
  const display = {
    last: document.querySelector(".display__last"),
    current: document.querySelector(".display__current"),
  }
  
  /* const displayLast = document.querySelector(".display__last");
  const displayCurrent = document.querySelector(".display__current"); */
  const displayUndo = document.querySelector(".display__undo");
  
  /* keypad */
  const keypad = document.querySelector(".keypad");

/* class instantiation */
const CalculatorService = new Calculator();
const KeypadService = new Keypad(display, calcObj);

/* main */

  /* functions */
  function handleNumberClick(event) {
    if (event.target.className === "number") {
      const number = event.target.textContent;
      KeypadService.addNumber(number);
      KeypadService.updateCurrentValue();
    }
  }

  function handleOperatorClick(event) {
    if (event.target.className === "operator") {
      calcObj.currentOperator = event.target.textContent;

      if (calcObj.currentValue === "") {
        KeypadService.updateOperator();
        return
      }
      
      if (calcObj.isGoing) {
        calcObj.previousValue = CalculatorService.calculate(calcObj);
      } else {
        calcObj.previousValue = calcObj.currentValue;
        calcObj.isGoing = true;
      }

      display.current.textContent = "";
      calcObj.currentValue = "";
      KeypadService.updateOperator();
    }
  }

  function handleDecimalClick(event) {
    if (event.target.className === "decimal") {
      if (!display.current.textContent.includes('.')) {
        KeypadService.addDecimal();
      }
    }
  }

  function handleAllClearClick(event) {
    if (event.target.className === "all-clear") {
      KeypadService.clearDisplay();
      KeypadService.resetCalculator();
    }
  }

  function handlePlusMinusClick(event) {
    if (event.target.className === "plus_minus") {
      if (calcObj.previousOperator === "=") {
        CalculatorService.plusMinus(calcObj, true);
      } else {
        CalculatorService.plusMinus(calcObj);
      }
    }
  }
  

  /* event listeners */
  displayUndo.addEventListener('click', () => {
    /* add logic for always deleting previousValue if an equals
    operation just occured, otherwise 
    remove a number from the currentValue */
    KeypadService.removeNumber();
  })

  keypad.addEventListener('click', (event) => {
    console.log(event.target)
    handleNumberClick(event);
    handleOperatorClick(event);
    handleDecimalClick(event);
    handleAllClearClick(event);
    handlePlusMinusClick(event);
    console.log(calcObj)
  })
