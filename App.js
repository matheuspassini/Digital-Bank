const User = require('./entities/User')
const Deposit = require('./entities/Deposit')
const Loan = require('./entities/Loan')
const Transfer = require('./entities/Transfer')

module.exports = class App {
    static #usersList = []

    static findUser(email) {
        const user = this.#usersList.find(user => user.email === email)
        return user ?? null
    }

    static createNewUser(username, email) {
        const userExists = App.findUser(email)
        if(!userExists) {
            this.#usersList.push(new User(username, email))
        }
    }

    static deposit(email, value) {
        const user = App.findUser(email)
        if(user) {
            const deposit = new Deposit(value)
            user.account.newDeposit(deposit)
        }
        user.account.newDeposit(value)
    }

    static transfer(userSentTransfer, userReceivedTransfer, valueTransfer) {
        const userSent = App.findUser(userSentTransfer)
        const userReceived = App.findUser(userReceivedTransfer)

        if(userReceived && userReceived) {
            const transfering = new Transfer(userSentTransfer, userReceivedTransfer, valueTransfer)
            userSent.account.newTransfer(transfering)
            userReceived.account.newTransfer(transfering)
        }
        
    }

    static loan(email, valueOfLoan, installments) {
        const user = App.findUser(email)
        if(user) {
            const loans = new Loan(valueOfLoan, installments)
            user.account.newLoan(loans)
        }
    }

    static defineInterestRate(newInterest) {
        Loan.defineInterestRate = newInterest
    }

}