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
        this.currentOp = this.currentOp.toString().slice(0, -1)
    }

    append_number(number) {
        if (number === '.' && this.currentOp.includes('.')) return //prevents function from adding a '.' if it has already been added on screen
        this.currentOp = this.currentOp.toString() + number.toString()
    }

    userOperations(operation) {
        if (this.currentOp === '') return
        if (this.previousOp !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOp = this.currentOp
        this.currentOp = ''
    }

    compute() {
        let calculation 
        const previous = parseFloat(this.previousOp)
        const current = parseFloat(this.currentOp)
        if (isNaN(previous) || isNaN(current)) return
        switch(this.operation) {
            case '+':
                calculation = previous + current;
                break
            case '-':
                calculation = previous - current;
                break
            case 'x':
                calculation = previous * current;
                break
            case '/':
                calculation = previous / current;
                break
            default:
                return 
        }
        this.currentOp = calculation
        this.operation = undefined
        this.previousOp = ''
    }

    displayNumber(number){
        const strNumber = number.toString()
        const integerPart = parseFloat(strNumber.split('.')[0])
        const decimalPart = strNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerPart)){
            integerPart = ''
        } else {
            integerDisplay = integerPart.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decimalPart != null){
            return `${integerDisplay}.${decimalPart}`
        } else {
            return integerDisplay
        }
    }

    updateResult() {
        this.currentOpText.innerText = this.currentOp
        this.previousOpText.innerText = this.previousOp
        if (this.operation != null) {
            this.previousOpText.innerText = `${this.displayNumber(this.previousOp)} ${this.operation}`
        } else {
            this.previousOpText.innerText = ''
        }
    }
}

const numbers = document.querySelectorAll('[data-numbers]')
const operations = document.querySelectorAll('[data-operations]')
const equals = document.querySelector('[data-equals]')
const backspace = document.querySelector('[data-delete]')
const allClear = document.querySelector('[data-all-clear]')
const previousOpText = document.querySelector('[data-previous-operations]')
const currentOpText = document.querySelector('[data-current-operations]')

const calculator = new Calculator(previousOpText,currentOpText)

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append_number(button.innerText)
        calculator.updateResult()
    })
})

operations.forEach(button => {
    button.addEventListener('click', () => {
        calculator.userOperations(button.innerText)
        calculator.updateResult()
    })
})

equals.addEventListener('click', () => {
    calculator.compute()
    calculator.updateResult()
})

allClear.addEventListener('click', () => {
    calculator.all_clear()
    calculator.updateResult()
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
