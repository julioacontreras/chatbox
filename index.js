
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

const { responseBot, trainBot, createBot } = require('./bot')

// triggers
const { generateTrigger } = require('./triggers/generateTrigger')

let botGas = createBot();
let botLuz = createBot();

const bots = {
  electricity: botLuz, 
  gas: botGas
}

const botDomains = {
  electricity: ['./luz.json', './greetings.json'], 
  gas: ['./greetings.json', './gas.json']
}

app.post('/es/bot', async (req, res) => {
  const domain = req.body.domain
  const bot = await trainBot(bots[domain], botDomains[domain])
  const question = req.body.question  
  const response = await findAsnwer(question, bot)

  // not find answer
  if (!response.answer) {
    res.send({
      answer: 'No te entiendo',
      output: response,
      type: 'text'
    })
  } else
  // find trigger
  if (response.answer.includes('trigger')) {
    res.send({
      answer: generateTrigger(response.answer),
      output: response,
      type: 'trigger'
    })
  }
  // normal question
  else {
    res.send({
      answer: response.answer,
      output: response,
      type: 'text'
    })
  }
})

app.listen(port, () => {
  console.log(`chatbox listening on port ${port}`)
})
