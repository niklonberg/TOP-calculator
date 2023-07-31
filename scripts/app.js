/* imports */
import Calculator from "../services/calculator-service.js";
import Keypad from "../services/keypad-service.js"

/* class instantiation */
const CalculatorService = new Calculator();
const KeypadService = new Keypad();

/* Calculation object */
const calcObj = {
  num1: 0,
  num2: 0,
  operator : "",
  result: 0,
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
      console.log(calcObj.num1);
      console.log(typeof(calcObj.num1));
    }

    if (event.target.className === "operator") {
      calcObj.operator = event.target.textContent;


    }

    if (event.target.className === "decimal") {
      display.current.textContent += ",";
    }

    if (event.target.className ==="all-clear") {
      display.current.textContent = "";
      display.last.textContent = "";
    }
  })