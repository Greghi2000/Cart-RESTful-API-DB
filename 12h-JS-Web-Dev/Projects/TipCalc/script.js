/* 

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// bill input, tip input, number of people div, and per person total div
let billInputTotal = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let numOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotalDiv = document.getElementById('perPersonTotal')


// Get number of people from number of people div
let numberOfPeople = Number(numOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBillYT = () => {
    // get bill from user input & convert it into a number
    let billTotal = Number(billInputTotal.value)
  
    // get the tip from user & convert it into a percentage (divide by 100)
    tipPercentage = Number(tipInput.value)/100
  
    // get the total tip amount
    tipAmount = tipPercentage * billTotal
  
    // calculate the total (tip amount + bill)
    total = tipAmount + billTotal
  
    // calculate the per person total (total divided by number of people)
    let result = total/numberOfPeople
  
    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = result
}

const calculateBill = () => {
    let billTotal = Number(billInputTotal.value)
    let tipAmount = (Number(tipInput.value) /100) * billTotal
    let finalBill = billTotal + tipAmount
    let result = finalBill/numberOfPeople
    perPersonTotalDiv.innerText = `$${result.toFixed(2)}`
}


// ** Splits the bill between more people **
const increasePeople = () => {
    // increment the amount of people
    let increase = numberOfPeople +=1
    // update the DOM with the new number of people
    numOfPeopleDiv.innerText = increase
    // calculate the bill based on the new number of people
    calculateBill()
}
  
// ** Splits the bill between fewer people **
const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if(numberOfPeople <=1) {
        alert('Hey! You can not have less than 1 person!')
        return
    }
    // decrement the amount of people
    let decrease = numberOfPeople -=1
    // update the DOM with the new number of people
    numOfPeopleDiv.innerText = decrease
    // calculate the bill based on the new number of people
    calculateBill()
}