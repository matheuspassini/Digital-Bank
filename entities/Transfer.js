module.exports = class Transfer {
    constructor(userSentTransfer, userReceivedTransfer, valueTransfer) {
        this.userSentTransfer = userSentTransfer
        this.userReceivedTransfer = userReceivedTransfer
        this.valueTransfer = valueTransfer
        this.creationDate = new Date()
    }
}