module.exports = class Installments {
    constructor(valueInstallment, amount) {
        this.valueInstallment = valueInstallment
        this.amount = amount
        this.status = 'pending'
    }
}