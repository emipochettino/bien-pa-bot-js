import telegraf from 'telegraf';

const bot = new telegraf(process.env.TELEGRAM_TOKEN);

const greetingMessageTexts = [
    "ola pa",
    "onda pa",
    "bien pa",
]
const incomingMessageTexts = [
    "vo pa",
]

const incomingAnswers = [
    "bien pa vo pa?",
    "bieeeeeeeen pa vo pa?",
    "feró pa vo pa?",
    "ahí andamo pa vo pa?",
]

const greetingAnswers = [
    "Hola pa bien pa vo pa?",
]

bot.on('text', async (ctx) => {
    if (ctx.message && ctx.message.text) {
        if (greetingMessageTexts.some(element => {
            return ctx.message.text.includes(element)
        })) {
            ctx.reply(greetingAnswers[Math.floor(Math.random() * greetingAnswers.length)]).catch();
        } else if (incomingMessageTexts.some(element => {
            return ctx.message.text.includes(element)
        })) {
            ctx.reply(incomingAnswers[Math.floor(Math.random() * incomingAnswers.length)]).catch();
        }
    }
});

bot.launch();