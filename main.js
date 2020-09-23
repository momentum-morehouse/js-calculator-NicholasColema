class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
}
clear() {
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined
}

delete() {

}

appendNumber(number) {
this.currentOperand = this.currentOperand.toString() + number .toString()
}

chooseOperation(operation) {

}

compute() {

}

updateDisplay()  {
     this.currentOperandTextElement.innerText = this.currentOperand
}



const numberButtons = document .querySelectorAll('[data number]')
const operationbuttons = document. querySelectorAll('[data-opertation]')
const equalsButton = document.querySelector('[data-equals]')
const deletButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-current-operand]')

const Calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
 button.addEventListener('click', () =>) {
    Calculator.appendNumber(button.innerText)
    Calculator.updateDisplay()   
 })
})

