/* imports */
import Calculator from "../services/calculator-service.js";

/* class instantiation */
const CalculatorService = new Calculator();
const KeypadService = new KeyPad();

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
  })

  /*  */

console.log(CalculatorService.add(2,4))