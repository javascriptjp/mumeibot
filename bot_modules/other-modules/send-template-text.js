const config = require("./send-template-text.json")
module.exports = async message => {
    if(message.channel.id==config.channel){
        message.channel.messages.fetch({ before: message.id, limit: 1 })
            .then(async messages => {
                const beforeMessage = await messages.first()
                if(beforeMessage.author.id==config.BotId)beforeMessage.delete();
                await message.channel.send({embeds: [{
                    color: "79bbff",
                    title: `__自己紹介テンプレート__`,
                    description: `コピペしてお使いください\`\`\`\n名前:\n性別:\n年齢:\n趣味:\n一言:\n\`\`\``,
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.guild.iconURL(),
                        text: "©️無名鯖 | setuna/Soso"
                    },
                }]})
            })
            .catch(console.error)
    }
}