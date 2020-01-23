const Blockchain = require('./blockchain')

const bitcoin = new Blockchain();
bitcoin.createNewBlock(7234234, '8908SDF09SD8F', 'ASDAS90A6787')

bitcoin.createNewtransaction(100, 'Alex8sada980123hjk', 'PemaPdasdhhj2')

bitcoin.createNewBlock(12312, '234234KJJ', 'OGHB21sds909')

console.log(bitcoin.chain[1])
