function Blockchain() {
  this.chain = [];
  this.newTransactions = [];
}

//nocne is pretty much a proof of work number
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timeStamp: Date.now(),
    transactions: this.newTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
  };

  this.newTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
}
