class Calculator {
    constructor(previousOpText, currentOpText) {
        this.previousOpText = previousOpText
        this.currentOpText = currentOpText
        this.all_clear()
    }

    all_clear() {
        this.currentOp = ''
        this.previousOp = ''
        this.operation = undefined
    }

    backspace() {

    }

    append_number(number) {
        this.currentOp = number
    }

    userOprations(operation) {

    }

    compute() {

    }

    updateResult() {
        this.currentOpText.innerText = this.currentOp
    }
}

const numbers = document.querySelectorAll('[data-numbers]')
const operations = document.querySelectorAll('[data-operations]')
const equals = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOpText = document.querySelector('[data-previous-operations]')
const currentOpText = document.querySelector('[data-current-operations]')
let math = '' //will be using this variable to store the given numbers and operations as a string before operating on them
const calculator = new Calculator(previousOpText,currentOpText)

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append_number(button.innerText)
        calculator.updateResult()
    })
})


/* function calculate(str) {    // passing the operations as a string 
    let char_array = str.split('')
    console.log(char_array)
    let divide_array = []
    let prod_array = []
    let subtract_array = []
    let add_array = []
    let result = 0

    char_array.forEach((char,index) => {    //operating on numbers that are being divided first
        if (char == '&#247;'){
            divide_array.push(char_array[index-1]/char_array[index+1])
        } else {
            divide_array.push(char)
        }
    })
    console.log(divide_array)
    divide_array.forEach((char,index) => {    //now operating on numbers that are being multiplied
        if (char == '*'){
            prod_array.push(divide_array[index-1] * divide_array[index+1])
        } else {
            prod_array.push(char)
        }
    })
    console.log(prod_array)
    prod_array.forEach((char,index) => {
        if (char == '-'){
            subtract_array.push(prod_array[index-1] - prod_array[index-1])
        } else {
            subtract_array.push(char)
        }
    })
    console.log(subtract_array)
    subtract_array.forEach(char => {
        if(!isNaN(Number(char))){
            result += Number(char)
        }
    })
    console.log(add_array)
    return result
} */

/* function clear(){                       //All-clear button to clear all numbers from the sreen
    previousOp.textContent = ''
    currentOp.textContent = ''
    math = ''
}
allClearButton.addEventListener('click', clear)

equals.addEventListener('click', () => {
    previousOp.textContent = currentOp.innerText
    //code about currentOps being the result of the calcualtion
    console.log(math)
    currentOp.textContent = calculate(math)
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if(operation.innerText == 'x'){
            currentOp.textContent += operation.innerText
            math += '*'
        } else if(operation.innerText == '&#247;') {
            currentOp.textContent += operation.innerText
            math += '/'
        } else {
            currentOp.textContent += operation.innerText
            math += operation.innerText
        }
        
    })
    
})

/* function add(a,b){
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
} */

/* switch(char) {
    case '+':
        return add(previousOp,currentOp);
    case '-':
        return subtract(previousOp,currentOp);
    case 'x':
        return multiply(previousOp,currentOp);
    case '&#247;':
        return divide(previousOp,currentOp); */