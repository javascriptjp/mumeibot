const { setTimeout } = require('timers/promises');
const config = require("./send-template-text.json")

module.exports = async message => {
    if(message.channel.id==config.channel){
        if(!message.member.roles.cache.has(config.CheckRole)){
            message.member.roles.add(config.CheckRole)
        }
        message.channel.messages.fetch({ before: message.id, limit: 1 })
            .then(async messages => {
                const beforeMessage = await messages.first()
                if(beforeMessage.author.id==config.BotId)beforeMessage.delete();
                await message.channel.send({embeds: [{
                    color: "79bbff",
                    title: `__自己紹介テンプレート__`,
                    description: `コピペしてお使いください\`\`\`\n名前:\n性別:\n年齢:\n趣味:\n一言:\n\`\`\`\n※こちらはメッセージと同時に送信されます`,
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.guild.iconURL(),
                        text: "©️無名鯖 | setuna/Soso"
                    },
                }]})
            })
            .catch(console.error)
    }else{
        if(message.member.roles.cache.has(config.CheckRole))return
        const sendMessage = await message.channel.send({embeds: [{
            color: "79bbff",
            title: `__お知らせ__`,
            description: `\nこのサーバーでは自己紹介をしてから参加していただいています。
            <#945853334949093416>にて自己紹介をしてからご参加ください
            \n__※自己紹介をしている状態でこのメッセージが出る場合__\n<@&680740561015144487>へメンションを付けてご連絡ください\n`,
            timestamp: new Date(),
            footer: {
                icon_url: message.guild.iconURL(),
                text: "©️無名鯖 | setuna/Soso"
            },
        }],content:`<@${message.author.id}>`})
        await setTimeout(10000);
        await sendMessage.delete();
    }
}