const greetings = {
    documents: [
      {
        intent: 'Hola',
        answerKey: 'hi-grettings',
      },
      {
        intent: 'Hasta luego',
        answerKey: 'bye-grettings',
      },
    ],
    answers: [
      {
        answerKey: 'hi-grettings',
        answer: 'Hola buenas!'
      },
      {
        answerKey: 'hi-grettings',
        answer: 'Hola, en que puedo ayudar?'
      },
      {
        answerKey: 'bye-grettings',
        answer: 'hasta luego :)'
      },
      {
        answerKey: 'bye-grettings',
        answer: 'hasta que tenga un buen dia'
      }
    ]
  }

  module.exports = { greetings }