# TOP-calculator
The Odin Projects final assignment, a calculator! Focusing on practicing using grid and mobile-first dev.

Assignment:

1. Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators
  add
  subtract
  multiply
  divide

2. A calculator operation will consist of a number, an operator, and another number. 
For example, 3 + 5. 
Create three variables for each of the parts of a calculator operation. 
Create a variable for the first number, the operator, and the second number. 
You’ll use these variables to update your display later.

3. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

4. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.

5. Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

6. Make the calculator work!

7. Gotchas: watch out for and fix these bugs if they show up in your code:

   Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time.
   For example, 12 + 7 - 5 * 3 = should yield 42.

   Your calculator should not evaluate more than a single pair of numbers at a time.

   You should round answers with long decimals so that they don’t overflow the screen.

   Pressing = before entering all of the numbers or an operator could cause problems!

   Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”

Extra credit:

  Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. 
  Add a . button and let users input decimals! 
  Make sure you don’t let them type more than one decimal though.

  Add a “backspace” button, so the user can undo if they click the wrong number.
