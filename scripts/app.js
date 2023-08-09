/* imports */
import Calculator from "../services/calculator-service.js";
import Keypad from "../services/keypad-service.js"

/* Calculation object */
const calcObj = {
  previousValue: 0,
  currentValue: 0,
  previousOperator: "",
  currentOperator : "",
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
      if (calcObj.currentValue === 0 && calcObj.previousOperator === "=") {
        KeypadService.resetDisplay();
      } else if (calcObj.currentValue === 0) {
        KeypadService.resetDisplayCurrent();
      }

      KeypadService.addNumber(number);
      KeypadService.updateCurrentValue();
    }
  }

  function handleOperatorClick(event) {
    if (event.target.className === "operator") {
      calcObj.currentOperator = event.target.textContent;

      if (calcObj.currentValue === 0) {
        KeypadService.updateOperator();
        KeypadService.showPreviousCalculation();
        console.log('new')
        return
      }

      if (calcObj.previousOperator !== "") {
        if (calcObj.currentOperator === "=") {
          KeypadService.showPreviousCalculation()
          calcObj.previousValue = CalculatorService.calculate(calcObj);
        } else {
          calcObj.previousValue = CalculatorService.calculate(calcObj);
          KeypadService.showPreviousCalculation();
        }
        console.log('going')
      } else {
        calcObj.previousValue = calcObj.currentValue;
        KeypadService.showPreviousCalculation();
        console.log('start')
      }

      KeypadService.resetCurrentValue();
      KeypadService.setDisplayCurrentToResult();
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
      KeypadService.resetDisplay();
      KeypadService.resetCalculator();
    }
  }

  function handleUnaryOperationClick(event) {
    const operation = event.target.id;

    if (event.target.id === "power") {
      KeypadService.showPowerCalculation();
    }

    if (calcObj.previousOperator === "=") {
      CalculatorService.unaryOperation(calcObj, operation, true);
    } else {
      CalculatorService.unaryOperation(calcObj, operation);
    }
    KeypadService.updateDisplayCurrent();
  }

  /* event listeners */
  displayUndo.addEventListener('click', () => {
    if (display.current.textContent === "") {
      KeypadService.resetDisplay();
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

    if (event.target.className === "unary") {
      handleUnaryOperationClick(event);
    }

    console.log(calcObj)
  })
