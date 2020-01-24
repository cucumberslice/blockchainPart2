const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//fetch entire blockchain
app.get('/blockchain', function(req,res) {
  res.send('hello')
})

// create a new transaction
app.post('/transaction', function(req,res) {
  const response = req.body
  console.log(response)
  res.send(`The amount of the trsansaction ${response.amount} bitcoin`)
})

// mine a new block
app.get('/mine', function(req,res) {

})

app.listen(3000, () => {
  console.log('Listening on port 3000....')
})
