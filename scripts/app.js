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
  operator : "",
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
      calcObj.num1 = Number(display.current.textContent);
      console.log(`num 1 is: ${calcObj.num1} num2 is: ${calcObj.num2}`)
    }

    if (event.target.className === "operator") {
      /* calculation */
      calcObj.operator = event.target.textContent;
      display.last.textContent = calcObj.num1;
      display.current.textContent = "";

      if (calcObj.isGoing) {
        console.log(CalculatorService.calculate(calcObj))
        calcObj.num2 = calcObj.num1;
      } else {
        calcObj.num2 = calcObj.num1;
        calcObj.isGoing = true;
      }

      console.log(`num 1 is: ${calcObj.num1} num2 is: ${calcObj.num2}`)
    }

    if (event.target.className === "decimal") {
      display.current.textContent += ",";
    }

    if (event.target.className ==="all-clear") {
      display.current.textContent = "";
      display.last.textContent = "";
    }
  })