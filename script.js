let number1 = '';
let number2 = '';
let operation = '';
let lastResult = '';
const maxDisplayLength = 24;

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
        if (calcScreen.innerText.length < maxDisplayLength) {
            if (calcScreen.innerText === '0' || (operation && calcScreen.innerText === number1.toString())) {
                calcScreen.innerText = e.target.innerText;
            } else {
                calcScreen.innerText += e.target.innerText;
            }
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
    if (num2 === 0) {
        return "Nice try! Division by zero is undefined.";
    }
    return num1 / num2;
}

function operate(operator, num1, num2) {
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'X':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            return 'Invalid operator error';
    }
    if (typeof result === 'number') {
        result = parseFloat(result.toFixed(2));
    }
    return result;
}