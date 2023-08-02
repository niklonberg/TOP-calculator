/* imports */
import Calculator from "../services/calculator-service.js";
import Keypad from "../services/keypad-service.js"

/* class instantiation */
const CalculatorService = new Calculator();
const KeypadService = new Keypad();

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

/* main */

  /* event listeners */
  keypad.addEventListener('click', (event) => {
    console.log(event.target)

    if (event.target.className === "number") {
      const number = event.target.textContent;
      display.current.textContent += number;
      calcObj.currentValue = Number(display.current.textContent);
      console.log(`curr value: ${calcObj.currentValue} prev value: ${calcObj.previousValue}`)
      console.log(`curr oper: ${calcObj.currentOperator} prev oper: ${calcObj.previousOperator}`)
    }

    if (event.target.className === "operator") {
      /* calculation */
      calcObj.currentOperator = event.target.textContent;

      if (calcObj.currentValue === "") {
        calcObj.previousOperator = calcObj.currentOperator;
        return
      }
      
      if (calcObj.isGoing) {
        calcObj.previousValue = CalculatorService.calculate(calcObj);
        if (calcObj.previousOperator !== calcObj.currentOperator) {
          calcObj.previousOperator = calcObj.currentOperator;
        }
      } else {
        calcObj.previousValue = calcObj.currentValue;
        calcObj.previousOperator = calcObj.currentOperator;
        calcObj.isGoing = true;
      }

      display.current.textContent = "";
      calcObj.currentValue = "";
      console.log(`curr value: ${calcObj.currentValue} prev value: ${calcObj.previousValue}`);
      console.log(`curr oper: ${calcObj.currentOperator} prev oper: ${calcObj.previousOperator}`);
    }

    if (event.target.className === "decimal") {
      if (!display.current.textContent.includes('.')) {
        display.current.textContent += ".";
      }
    }

    if (event.target.className ==="all-clear") {
      display.current.textContent = "";
      display.last.textContent = "";
    }


  })
