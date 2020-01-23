const Blockchain = require('./blockchain')
const bitcoin = new Blockchain();

const previousHash = 'HHHGH898989fdsf'
const currentBlockData = [
  {
    amount: 10,
    sender: 'Yeshi',
    recipient: 'sonam'
  },
  {
    amount: 30,
    sender: 'pema',
    recipient: 'dophu'
  },
  {
    amount: 200,
    sender: 'leki',
    recipient: 'wanghuk'
  }
]


console.log(bitcoin.hashBlock(previousHash, currentBlockData,5788))
