const bankBalance = document.getElementById('bankBalance')
// const moneyInput = document.getElementById('moneyInput').value


class Bank {
    constructor(name) {
        this.name = name
        this.balance = 1000
    }
    deposit(balance1) {
        this.balance += balance1
    }
    withdraw(amount) {
        if(amount>this.balance){
            alert(`You have insuficcent funds to withdraw that amount. Remaining funds are $${this.balance}`)
        }else {
            this.balance -= amount
        }
    }
}

// newFunc = (x) => {
//     const newBank = new Bank(x)
// } 

const gregBank = new Bank('Gregorio')

depositClick = () => {
    showBankBalance()
    const moneyInput = document.getElementById('moneyInput').value
    gregBank.balance += Number(moneyInput)
}


withdrawClick = () => {
    const moneyOutput = document.getElementById('moneyInput').value
    gregBank.withdraw(Number(moneyOutput))
    console.log(gregBank.balance)
    showBankBalance()
}

showBankBalance = () => {
    bankBalance.innerText = gregBank.balance
}
showBankBalance()

console.log(gregBank.balance)