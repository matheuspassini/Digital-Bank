module.exports = class Deposit {
    constructor(valueToDeposit) {
        this.valueToDeposit = valueToDeposit
        this.creationDate = new Date()
    }
}