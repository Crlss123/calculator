function add(n1, n2) {
  return n1 + n2;
}

function substract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function operate(n1, n2, operand) {
  n1 = parseInt(n1);
  n2 = parseInt(n2);

  switch (operand) {
    case "+":
      return add(n1, n2).toString();
    case "-":
      return substract(n1, n2).toString();
    case "x":
      return multiply(n1, n2).toString();
    case "/":
      return divide(n1, n2).toString();
    default:
      return null;
  }
}

let buffer = "";
let number = "";
let op = "";
let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".number");
let operands = document.querySelectorAll(".operand");
let clear = document.querySelector(".clear");
let result = document.querySelector(".result");

result.addEventListener("click", () => {
  if (number && buffer && op) {
    buffer = operate(number, buffer, op);
    display.textContent = buffer;
    number = "";
    op = "";
  }
});

clear.addEventListener("click", () => {
  buffer = "";
  number = "";
  secondNumber = "";
  display.innerText = "0";
});

operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    if (number === "") {
      number = buffer;
      buffer = "";
    } else {
      buffer = operate(number, buffer, op);
      display.textContent = buffer;
      number = buffer;
      buffer = "";
    }
    op = operand.value;
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    buffer += number.value;
    display.textContent = buffer;
  });
});
