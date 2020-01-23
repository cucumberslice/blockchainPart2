function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
}

//nocne is pretty much a proof of work number
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timeStamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
}

Blockchain.prototype.getLastBlock = function() {
  return this.chain[this.chain.length-1]
}

Blockchain.prototype.createNewtransaction = function(amount, sender, recipient) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient
  }

  this.pendingTransactions.push(newTransaction)

  return this.getLastBlock()['index'] + 1
}



module.exports = Blockchain
