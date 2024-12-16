const buttons = document.querySelectorAll('button')
const inputButton = document.querySelector('.grid input')
const errorMsg = document.getElementById('error-msg')
const personInput = document.getElementById('person')

const getValues = () =>{
    buttons.forEach((button) =>{
        button.addEventListener('click', () =>{
            const cost = document.getElementById('cost').value
            const personAmount = document.getElementById('person').value
            const tipPercentage = button.value
           
            if(personAmount >= 1 && Number.isInteger(Number(personAmount))){
                calculateTips(cost,personAmount,tipPercentage)
                errorMsg.style.visibility = 'hidden'
                personInput.classList.remove('person-error')
            } else{
                errorMsg.style.visibility = 'visible'
                personInput.classList.add('person-error')
            }
            
        })
    })
}

inputButton.addEventListener('input', ()=>{
    const cost = document.getElementById('cost').value
    const personAmount = document.getElementById('person').value
    const tipPercentage = inputButton.value
           
    if(personAmount >= 1 && Number.isInteger(Number(personAmount))){
        calculateTips(cost,personAmount,tipPercentage)
    } else{
        console.log("not a valid input")
    }
})

const calculateTips = (bill,numPerson,tipPerc) => {
    bill = parseFloat(bill)
    numPerson = parseInt(numPerson)
    tipPerc = parseInt(tipPerc)

    resultTipPerson = bill * (tipPerc / 100) / numPerson
    
    resultTip = bill * (tipPerc / 100)
    resultTotal  = (resultTip/numPerson) + (bill/numPerson) 

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