/* imports */
import Calculator from "../services/calculator-service.js";
import Keypad from "../services/keypad-service.js"

/* class instantiation */
const CalculatorService = new Calculator();
const KeypadService = new Keypad();

/* references */

  /* display */
  const display = document.querySelector('.display');
  
  const displayLast = document.querySelector(".display__last");
  const displayCurrent = document.querySelector(".display__current");
  const displayUndo = document.querySelector(".display__undo");
  
  /* keypad */
  const keypad = document.querySelector(".keypad");

/* main */

  /* event listeners */
  keypad.addEventListener('click', (event) => {
    console.log(event.target)

    if (event.target.className === "number") {
      const number = event.target.textContent;
      displayCurrent.textContent += number;
    }

    if (event.target.className === "operator") {

    }

    if (event.target.className === "decimal") {
    }
  })

  /*  */

console.log(CalculatorService.add(2,4))