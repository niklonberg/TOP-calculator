/* imports */
import Calculator from "../services/calculator-service.js";

/* class instantiation */
const calc = new Calculator();

/* references */

  /* display */
  const displayCalc = document.querySelector(".display__calc");
  const displayCurrent = document.querySelector(".display__current");
  const displayUndo = document.querySelector(".display__undo");
  
  /* keypad */
  const keypad = document.querySelector(".keypad");
