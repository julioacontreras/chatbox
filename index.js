
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

const { responseBot, trainBot } = require('./bot')

// domains
const { faqs } = require('./domains/faqs')
const { greetings } = require('./domains/greetings')
const { gas } = require('./domains/gas')

// triggers
const { generateTrigger } = require('./triggers/generateTrigger')

app.post('/es/bot', async (req, res) => {
  const bot = await trainBot([faqs, greetings, gas])
  const question = req.body.question  
  const response = await responseBot(question, bot)

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
