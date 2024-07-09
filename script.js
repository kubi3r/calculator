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
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
    }
}

const calculator = document.querySelector('#calculator')
const display = document.querySelector('#display')

let displayValue;

calculator.addEventListener('click', (e) => {
    if (e.target.textContent === 'Clear') {
        display.textContent = ''
    } else {
        display.textContent += e.target.textContent
    }
    displayValue = display.textContent
})

let a;
let b;
let operator;