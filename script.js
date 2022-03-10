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

function operate(operator,c,d) {
    switch(operator) {
        case 'add':
            return add(c,d);
        case 'subtract':
            return subtract(c,d);
        case 'multiply':
            return multiply(c,d);
        case 'divide':
            return divide(c,d);
    }
}

console.log(operate('divide',3,6));