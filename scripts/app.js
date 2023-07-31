/* imports */
import Calculator from "../services/calculator-service.js";
import Keypad from "../services/keypad-service.js"

/* class instantiation */
const CalculatorService = new Calculator();
const KeypadService = new Keypad();

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
    }

    if (event.target.className === "operator") {
      display.last.textContent = display.current.textContent;
      display.last.textContent += " " + event.target.textContent
    }

    if (event.target.className === "decimal") {
      KeypadService.clear(display)
    }
  })

  /*  */

console.log(CalculatorService.add(2,4))