let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML;

    // code for all operations
    if (buttonText === '=') {
      try {
        expression = eval(expression);
        input.value = expression;
      } catch (error) {
        input.value = 'Error';
      }
    } else if (buttonText === 'AC') {
      expression = "";
      input.value = "";
    } else if (buttonText === 'DEL') {
      expression = expression.slice(0, -1);
      input.value = expression;
    } else if (buttonText === 'π') {
      expression += Math.PI;
      input.value = expression;
    } else if (buttonText === '√') {
      expression = Math.sqrt(expression);
      input.value = expression;
    } else if (buttonText === 'sin') {
      expression = Math.sin(expression);
      input.value = expression;
    } else if (buttonText === 'cos') {
      expression = Math.cos(expression);
      input.value = expression;
    } else if (buttonText === 'tan') {
      expression = Math.tan(expression);
      input.value = expression;
    } else if (buttonText === 'log') {
      expression = Math.log10(expression);
      input.value = expression;
    } else if (buttonText === 'ln') {
      expression = Math.log(expression);
      input.value = expression;
    } else if (buttonText === 'x^2') {
      expression = Math.pow(expression, 2);
      input.value = expression;
    } else if (buttonText === 'x!') {
      expression = factorial(expression);
      input.value = expression;
    } else if (buttonText === 'rad') {
      expression = toRadians(expression);
      input.value = expression;
    } else if (buttonText === '∘') {
      expression = toDegrees(expression);
      input.value = expression;
    } else {
      expression += buttonText;
      input.value = expression;
    }
  });
});
//  code for factorial function
function factorial(num) {
  if (num === 0) {
    return 1;
  } else if (num < 0) {
    return NaN;
  } else {
    let result = 1;
    for (let i = num; i > 0; i--) {
      result *= i;
    }
    return result;
  }
}

// code for conversion of degree yo radians and vice-versa
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
  return radians * (180 / Math.PI);
}