let firstNum = NaN;
let operation = '';
let secondNum = NaN;

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
    if (b == 0) {
        return NaN;
    } else {
        return Math.floor(a / b * 10) / 10;
    }
}

function calc(a, oper, b) {
    switch (oper) {
        case '+':
            return add(a, b);
        case '—': 
            return subtract(a, b);
        case '/': 
            return divide(a, b);
        case '×':
            return multiply(a, b);
    }
}

const buttons = Array.from(document.querySelectorAll('button'));
const output = document.querySelector('.output');
const reset = document.querySelector('.reset');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multi = document.querySelector('.multi');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');

reset.addEventListener('click', (e) => {
    firstNum = NaN;
    operation = '';
    secondNum = NaN;
    output.textContent = '';
});

equal.addEventListener('click', (e) => {
    if (firstNum) {
        secondNum = +output.textContent;
        firstNum = calc(firstNum, operation, secondNum);
        secondNum = NaN;
        operation = "";
    } else {
        firstNum = +output.textContent;
        operation = "";
    }
    output.textContent = firstNum;
    firstNum = NaN;
});

for (button of buttons) {
    if (+button.textContent) {
        button.addEventListener('click', (e) => {
            output.textContent += e.target.textContent;
        });
    } else if (button.textContent != 'AC' && button.textContent != '=') {
        button.addEventListener('click', (e) => {
            if (firstNum) {
                secondNum = +output.textContent;
                firstNum = calc(firstNum, operation, secondNum);
                secondNum = NaN;
                operation = e.target.textContent;
            } else {
                firstNum = +output.textContent;
                operation = e.target.textContent;
            }
            output.textContent = '';
        });
    }
}