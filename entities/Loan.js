const Installments = require("./Installments")

module.exports = class Loan {
    static #interestRate = 1.05

    constructor(valueOfLoan, installments) {
        this.valueOfLoan = valueOfLoan
        this.installments = []
        for (let i = 1; i <= installments; i++) {
            this.installments.push(new Installments((valueOfLoan * Loan.#interestRate) / installments, i))
        }
        this.creationDate = new Date()
    }

    static get interestRate() {
        return Loan.#interestRate
    }

    static set defineInterestRate(newInterestRate) {
        this.#interestRate = 1 + (newInterestRate / 100)
    }


}