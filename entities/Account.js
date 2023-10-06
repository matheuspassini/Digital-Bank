module.exports = class Account {
    #accountBalance
    
    constructor(accountOwner) {
        this.#accountBalance = 0
        this.depositsRealized = []
        this.loans = []
        this.transfers = []
        this.accountOwner = accountOwner
    }

    get getAccountBalance() {
        return this.#accountBalance
    }

    newDeposit(valueDeposit) {
        this.#accountBalance += valueDeposit
        this.depositsRealized.push(valueDeposit)
    }

    newLoan(valueLoan) {
        this.#accountBalance += valueLoan
        this.loans.push(valueLoan)
    }

    newTransfer(transfer) {
        if (transfer.userSentTransfer.email === this.accountOwner.email) {
            this.#accountBalance += transfer.valueTransfer
            this.transfers.push(transfer)
        } else if (transfer.userReceivedTransfer.email === this.accountOwner.email) {
            this.#accountBalance -= transfer.valueTransfer
            this.transfers.push(transfer)
        }
    }
}