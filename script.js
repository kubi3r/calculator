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
    if (a === 0 || b === 0) {
        const division = document.querySelector('.division');
        division.remove();
        return '';
    } else {
        return a / b;
    }
    
}

function operate(operator, a, b) {
    if (!(operator && a && b)) { // If operator/a/b haven't been entered yet, don't operate
        return;
    }
    let result;
    switch(operator) {
        case '+':
            result = add(parseInt(a), parseInt(b));
            break;
        case '-':
            result = subtract(parseInt(a), parseInt(b));
            break;
        case '*':
            result = multiply(parseInt(a), parseInt(b));
            break;
        case '/':
            result = divide(parseInt(a), parseInt(b));
            break;
    }
    globalA = Math.round(result * 1000) / 1000;
    globalB = '';
    globalOperator = '';
    return result
}

function updateDisplay(operator, a, b) {
    display.textContent = `${a} ${operator} ${b}`
}

const calculator = document.querySelector('#calculator');
const display = document.querySelector('#display');

let globalA = '';
let globalB = '';
let globalOperator = ''

calculator.addEventListener('click', (e) => {
    const char = e.target.textContent;
    switch(char) {
        case '=':
            if (globalA && globalB && globalOperator) {
                operate(globalOperator, globalA, globalB)
            }
            break;
        case 'Clear':
            globalA = '';
            globalB = '';
            globalOperator = ''
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if (globalOperator) { // If an operator has already been entered
                operate(globalOperator, globalA, globalB)
            }
            globalOperator = char;
            break;
        default:
            if (!globalOperator) { // If operator hasn't been entered yet (still on 1st number)
                globalA += char;
            } else {
                globalB += char;
            }
            break;
    }
    updateDisplay(globalOperator, globalA, globalB)
})