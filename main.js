const display = document.getElementById("display");

function clickButton(input) {
  display.value += input;
}

function clearDisplay(input) {
  display.value = '';
}

function resultValue(input) {
  display.value = eval(display.value);
}
