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
    result: document.querySelector(".display__result"),
    current: document.querySelector(".display__current"),
  }
  
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

      if (calcObj.currentValue === 0) {
        KeypadService.updateOperator();
        /* KeypadService.updateDisplayResult(true); */
        return
      }
      
      if (calcObj.isGoing) {
        /* KeypadService.updateDisplayResult(); */
        calcObj.previousValue = CalculatorService.calculate(calcObj);
      } else {
        calcObj.previousValue = calcObj.currentValue;
        /* KeypadService.updateDisplayResult(true); */
        calcObj.isGoing = true;
      }

      KeypadService.resetCurrentValue();
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

  function handlePowerClick(event) {
    if (event.target.className === "power") {

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
    if (display.current.textContent === "") {
      KeypadService.clearDisplay();
      KeypadService.resetCalculator();
    } else {
      KeypadService.removeOneCharacter();
      KeypadService.updateCurrentValue();
    }
    console.log(calcObj)
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
