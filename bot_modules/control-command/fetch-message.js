const Discord = require("discord.js")
const fetch2more = require("../functions/fetch2more")
module.exports = async (message, args) => {
    const limit = (args[0])?args[0]:400
    const fetchedMessages = await fetch2more(message.channel, {
        limit: limit,
        before: message.id
    })
    let file = ""
    fetchedMessages.forEach(n=>{
        file=`${n.author.username} | ${n.content.replace(/\n/g," ")==""?"<No content>":n.content.replace(/\n/g," ")}\n`+file
    })
    message.channel.send({ files: [new Discord.MessageAttachment(Buffer.from(file),'archive.txt')] })
}