let number1;
let number2;
let operation;

const calcScreen = document.getElementById('calc-screen')
const clearBtn = document.getElementById('btnc')
const numberBtns = document.querySelectorAll('.number')

let displayValue = +calcScreen.innerText

clearBtn.addEventListener('click', (e) => {
    calcScreen.innerText = ''
    displayValue = +calcScreen.innerText
})

for (let btnElement of numberBtns) {
    btnElement.addEventListener('click', (e) => {
        calcScreen.innerText += e.target.innerText
        displayValue = +calcScreen.innerText
    })
}

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
        case '*':
            return multiply(num1,num2)
        case '/':
            return divide(num1,num2)
        default:
            return 'Invalid operator error'
    }
}