/* imports */
import Calculator from "../services/calculator-service.js";
import Keypad from "../services/keypad-service.js"

/* Calculation object */
const calcObj = {
  previousValue: 0,
  currentValue: "",
  previousOperator: "",
  currentOperator : "",
}

/* references */

  /* display */
  const display = {
    result: document.querySelector(".display__result"),
    current: document.querySelector(".display__current"),
  }
  
  const displayBackspace = document.querySelector(".display__backspace");
  
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

      if (calcObj.currentValue === "" && calcObj.previousOperator === "=") {
        KeypadService.resetDisplay();
      } else if (calcObj.currentValue === "") {
        KeypadService.resetDisplayCurrent();
      }

      if (display.current.textContent.length <= 13) {
        KeypadService.addNumber(number);
      }
      
      KeypadService.updateCurrentValue();
    }
  }

  function handleOperatorClick(event) {
    if (event.target.closest('.operator')) {
      calcObj.currentOperator = event.target.closest('.operator').id;

      if ((calcObj.previousOperator === "" && calcObj.currentOperator === "=") ||
          (calcObj.previousOperator === "=" && calcObj.currentOperator === "=")) {
            KeypadService.showMathError();
            KeypadService.resetCalculator();
            return
      }

      if (calcObj.currentValue === "") {
        KeypadService.updateOperator();
        KeypadService.showPreviousCalculation();
        return
      }

      if (calcObj.previousOperator !== "") {
        let result = CalculatorService.calculate(calcObj);
        result = CalculatorService.roundToFive(result);
        
        if (calcObj.currentOperator === "=") {
          KeypadService.showPreviousCalculation()
          calcObj.previousValue = result;
        } else {
          calcObj.previousValue = result;
          KeypadService.showPreviousCalculation();
        }
      } else {
        calcObj.previousValue = calcObj.currentValue;
        KeypadService.showPreviousCalculation();
      }

      KeypadService.resetCurrentValue();
      KeypadService.setDisplayCurrentToResult();
      KeypadService.updateOperator();
    }
  }

  function handleDecimalClick(event) {
    if (event.target.className.includes("decimal")) {
      if (!display.current.textContent.includes('.')) {
        KeypadService.addDecimal();
      }
    }
  }

  function handleAllClearClick(event) {
    if (event.target.closest(".all-clear")) {
      KeypadService.resetDisplay();
      KeypadService.resetCalculator();
    }
  }

  function handleUnaryOperationClick(event) {
    const operation = event.target.id;

    if (calcObj.previousOperator === "=") {
      CalculatorService.unaryOperation(calcObj, operation, true);
    } else {
      CalculatorService.unaryOperation(calcObj, operation);
    }
    KeypadService.updateDisplayCurrent();
  }

  /* event listeners */
  displayBackspace.addEventListener('click', () => {
    if (display.current.textContent === "") {
      KeypadService.resetDisplay();
      KeypadService.resetCalculator();
    } else {
      KeypadService.removeOneCharacter();
      KeypadService.updateCurrentValue();
    }
  })

  keypad.addEventListener('click', (event) => {
    handleNumberClick(event);
    handleOperatorClick(event);
    handleDecimalClick(event);
    handleAllClearClick(event);

    if (event.target.className.includes("unary")) {
      handleUnaryOperationClick(event);
    }
  })
