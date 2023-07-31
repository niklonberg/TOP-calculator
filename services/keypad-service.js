class Keypad {
  constructor() {
  }
  
  clear(display) {
    display.last.textContent = "";
    display.current.textContent = "";
  }
}

export default Keypad
