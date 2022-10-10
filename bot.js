const { NlpManager } = require('node-nlp')
 
const loadDomain = (domain, manager, lang = 'es') => {
    domain.documents.forEach(document => {
        manager.addDocument(lang, document.intent, document.answerKey);
    })
    domain.answers.forEach(answer => {
        manager.addAnswer(lang, answer.answerKey, answer.answer);
    })
    return manager
}

const responseBot = async (question, bot, lang = 'es') => {
    return bot.process(lang, question);
}

const trainBot = async (domains, lang = 'es') => {
    let bot = new NlpManager({ languages: [lang], forceNER: true });

    domains.forEach(domain => {
        bot = loadDomain(domain, bot)
    })
    
    await bot.train()
    bot.save()

    return bot
}

module.exports = { responseBot, trainBot }
