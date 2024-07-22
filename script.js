let number1 = '';
let number2 = '';
let operation = '';
let lastResult = '';

const calcScreen = document.getElementById('calc-screen');
const clearBtn = document.getElementById('btnc');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('btn=');

clearBtn.addEventListener('click', (e) => {
    calcScreen.innerText = 0;
    number1 = '';
    number2 = '';
    operation = '';
    lastResult = '';
});

numberBtns.forEach(btnElement => {
    btnElement.addEventListener('click', (e) => {
        if (calcScreen.innerText == '0' || operation && calcScreen.innerText == number1.toString()) {
            calcScreen.innerText = e.target.innerText;
        } else {
            calcScreen.innerText += e.target.innerText;
        }
    });
});

operatorBtns.forEach(btnElement => {
    btnElement.addEventListener('click', (e) => {
        if (operation && calcScreen.innerText !== '' && calcScreen.innerText !== number1.toString()) {
            number2 = +calcScreen.innerText;
            lastResult = operate(operation, number1, number2);
            calcScreen.innerText = lastResult;
            number1 = lastResult;
            number2 = '';
        } else {
            number1 = +calcScreen.innerText;
        }
        operation = e.target.innerText;

        if (calcScreen.innerText !== lastResult.toString()) {
            calcScreen.innerText = number1.toString();
        }
    });
});

equalsBtn.addEventListener('click', (e) => {
    if (operation && calcScreen.innerText !== '') {
        number2 = +calcScreen.innerText;
        lastResult = operate(operation, number1, number2);
        calcScreen.innerText = lastResult;
        number1 = lastResult;
        number2 = '';
        operation = '';
    }
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'X':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'Invalid operator error';
    }
}