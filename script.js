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