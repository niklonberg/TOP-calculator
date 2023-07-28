import Calculator from "../service/calculator.js";

const calc = new Calculator();

console.log(calc.add(2, 4));
console.log(calc.subtract(2, 4));
console.log(calc.divide(2, 4));
console.log(calc.multiply(2, 4));