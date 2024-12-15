const buttons = document.querySelectorAll('button')

const getValues = () =>{
    buttons.forEach((button) =>{
        button.addEventListener('click', () =>{
            const cost = document.getElementById('cost').value
            const personAmount = document.getElementById('person').value
            const tipPercentage = button.value
           
            calculateTips(cost,personAmount,tipPercentage)
        })
    })
}

const calculateTips = (bill,numPerson,tipPerc) => {
    bill = parseFloat(bill)
    numPerson = parseInt(numPerson)
    tipPerc = parseInt(tipPerc)

    resultTipPerson = bill * (tipPerc / 100) / numPerson
    
    resultTip = bill * (tipPerc / 100)
    resultTotal  = resultTip + bill

    displayValue(resultTipPerson,resultTotal)
}

const displayValue = (tap,tat) => {
    let tipAmountTotal = document.querySelector('.tip-amt-total')
    let tipAmountPerson = document.querySelector('.tip-amt-person')

    tipAmountPerson.textContent = `$${tap.toFixed(2)}`
    tipAmountTotal.textContent = `$${tat.toFixed(2)}`
}

const clear = () =>{
    const costInput = document.getElementById('cost');
    const personInput = document.getElementById('person');
    costInput.value = '';
    personInput.value = '';

    const tipAmountPerson = document.querySelector('.tip-amt-person');
    const tipAmountTotal = document.querySelector('.tip-amt-total');
    const customPercentage = document.querySelector('.grid input')
    tipAmountPerson.textContent = '$0.00';
    tipAmountTotal.textContent = '$0.00';
    customPercentage.value = ''
}

document.addEventListener('DOMContentLoaded', () => {
    getValues();
    const resetButton = document.querySelector('.display button')
    resetButton.addEventListener('click',clear)
});