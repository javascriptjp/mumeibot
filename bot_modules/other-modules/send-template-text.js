const config = require("./send-template-text.json")
module.exports = async message => {
    if(message.channel.id==config.channel){
        const beforeMessage = await message.channel.messages.fetch({ before: message.id, limit: 1 })
            .then(messages => messages.first())
            .catch(console.error)
        if(beforeMessage.author.id!==config.BotId)return;
        beforeMessage.delete()
        message.channel.send({embeds: [{
            color: "79bbff",
            title: `__自己紹介テンプレート__`,
            description: `コピペしてお使いください\`\`\`\n名前:\n性別:\n年齢:\n趣味:\n一言:\n\`\`\``,
            timestamp: new Date(),
            footer: {
                icon_url: member.guild.iconURL(),
                text: "©️無名鯖 | setuna/Soso"
            },
        }]})
    }
}