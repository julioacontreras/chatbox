# Chatbot

Is a Chatbot microservice API REST using NPL (Natural-programming Language)

## Getting started 

```bash
npm install
npm start
```

## API 

```rest
POST http://localhost:3000/bot HTTP/1.1
Content-Type: application/json

{
 "question":  "hola"    
}

// possible response:
// {
//   "answer": "Hola buenas!"  
//   ...
// }
```

## Domains

Domains are collection the **intents** and **aswers** to train a BOT to answer User.

- intents: words the user will ask bot.
- answer: possible bot responses.

## Triggers

Is possible create intents to execute trigger to create a custom answer.
