const numbers = document.querySelectorAll('[data-numbers]')
const operations = document.querySelectorAll('[data-operations]')
const equals = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOp = document.querySelector('[data-previous-operations]')
const currentOp = document.querySelector('[data-current-operations]')


function add(a,b){
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function calculate(operator,previousOp,currentOp) {
    switch(operator) {
        case '+':
            return add(previousOp,currentOp);
        case '-':
            return subtract(previousOp,currentOp);
        case 'x':
            return multiply(previousOp,currentOp);
        case '&#247;':
            return divide(previousOp,currentOp);
    }
}

function clear(){                       //All-clear button to clear all numbers from the sreen
    previousOp.textContent = ''
    currentOp.textContent = ''
}
allClearButton.addEventListener('click', clear)

numbers.forEach(button => {
    button.addEventListener('click', () => {
        currentOp.textContent += button.innerText
    })
})

equals.addEventListener('click', () => {
    previousOp.textContent = currentOp.innerText
    //code about currentOps being the result of the calcualtion
    currentOp.textContent = Number(previousOp)
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        currentOp.textContent += operation.innerText
    })
})

console.log(operate('divide',3,6));