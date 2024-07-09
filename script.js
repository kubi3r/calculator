function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            display.textContent = add(a, b);
            break;
        case '-':
            display.textContent = subtract(a, b);
            break;
        case '*':
            display.textContent = multiply(a, b);
            break;
        case '/':
            display.textContent = divide(a, b);
            break;
    }
}

function splitDisplay(display) {
    const operatorIndex = display
        .split('')
        .findIndex(char => '+-*/'.includes(char))
    const split = display.split(display[operatorIndex])
    operate(display[operatorIndex], parseFloat(split[0]), parseFloat(split[1]))
}

const calculator = document.querySelector('#calculator');
const display = document.querySelector('#display');

let displayValue;

calculator.addEventListener('click', (e) => {
    const operation = e.target.textContent;
    if (operation === '=') {
        displayValue = display.textContent;
        splitDisplay(displayValue);
    } else if (operation === 'Clear') {
        display.textContent = '';
    } else {
        display.textContent += operation;
    };
    
})

let a;
let b;
let operator;