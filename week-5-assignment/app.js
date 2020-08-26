function onClickSum() {
  let x = prompt("Enter the first number");
  let y = prompt("Enter the second number");

  let result = +x + +y;
  document.getElementById("sumValue").innerHTML = result;
}

function onClickSubtract() {
  var x = prompt("Enter the first number");
  var y = prompt("Enter the second number");

  var result = subtract(x, y);
  document.getElementById("subtractValue").innerHTML = result;
}

function subtract(x, y) {
  return x - y;
}

function onClickMultiply() {
  var x = prompt("Enter the first number");
  var y = prompt("Enter the second number");

  var result = multiply(x, y);
  document.getElementById("multiplyValue").innerHTML = result;
}

function multiply(x, y) {
  return x * y;
}

function onClickDivide() {
  var x = prompt("Enter the first number");
  var y = prompt("Enter the second number");

  var result = divide(x, y);
  document.getElementById("divideValue").innerHTML = result;
}

function divide(x, y) {
  return x / y;
}

function onClickPower() {
  var x = prompt("Enter the first number");
  var y = prompt("Enter the second number");

  var result = Math.pow(x, y);
  document.getElementById("powerValue").innerHTML = result;
}

function onClickSquare() {
  var x = prompt("Enter the number");

  var result = Math.sqrt(x);
  document.getElementById("squareValue").innerHTML = result;
}
