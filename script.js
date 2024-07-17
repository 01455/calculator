let number1;
let number2;
let operation;
let operatorCount = 0
let lastResult;

const calcScreen = document.getElementById('calc-screen')
const clearBtn = document.getElementById('btnc')
const numberBtns = document.querySelectorAll('.number')
const operatorBtns = document.querySelectorAll('.operator')
const equalsBtn = document.getElementById('btn=')

let displayValue = +calcScreen.innerText

clearBtn.addEventListener('click', (e) => {
    calcScreen.innerText = 0
    displayValue = +calcScreen.innerText
    number1 = ''
    number2 = ''
    operation = ''
    operatorCount = 0
    lastResult = ''
})

for (let btnElement of numberBtns) {
    btnElement.addEventListener('click', (e) => {
        if (calcScreen.innerText == 0) {
            calcScreen.innerText = e.target.innerText;
        } else {
            calcScreen.innerText += e.target.innerText;
        }
        displayValue = +calcScreen.innerText
    })
}

for (let btnElement of operatorBtns) {
    btnElement.addEventListener('click', (e) => {
        if (operatorCount === 0) {
            number1 = +calcScreen.innerText
            operation = e.target.innerText
            calcScreen.innerText = ''
            operatorCount++
        }
        else if (!operatorCount % 2 === 0) {
            number1 = +lastResult
            operation = e.target.innerText
            calcScreen.innerText = ''
            operatorCount++
        }
    })
}

equalsBtn.addEventListener('click', (e) => {
    // add logic to finish calculation, save number2
    if (!calcScreen.innerText == '') {
        number2 = +calcScreen.innerText
        calcScreen.innerText = operate(operation, number1, number2)
        lastResult = +calcScreen.innerText
    }
})

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1,num2)
        case '-':
            return subtract(num1,num2)
        case 'X':
            return multiply(num1,num2)
        case '/':
            return divide(num1,num2)
        default:
            return 'Invalid operator error'
    }
}