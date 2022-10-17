const { NlpManager } = require('node-nlp')

const createBot = (lang = 'es') => {
    return new NlpManager({ languages: [lang], forceNER: true })
}
 
const findAsnwer = async (question, bot, lang = 'es') => {
    return bot.process(lang, question);
}

const trainBot = async (bot, corpus) => {
    corpus.forEach(corpusPath => {
        bot = bot.addCorpus(corpusPath)
    })
    
    await bot.train()
    bot.save()

    return bot
}

module.exports = { findAsnwer, trainBot, createBot }
