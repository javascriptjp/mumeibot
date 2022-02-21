module.exports = async (message, args = false) => {
    const member = message.mentions.members.first()
    if(!member){
        message.channel.send({embeds: [{
            color: "79bbff",
            title: "`Error`",
            description: `\`\`\`s!kick <@Member>\`\`\`\nで指定してください`,
            timestamp: new Date(),
            footer: {
                icon_url: message.guild.iconURL(),
                text: "©️無名鯖 | setuna/Soso"
            },
        }]})
    }else{
        member.kick(args[0]?args[0]:"BotKick see you :^)")
        message.channel.send({embeds: [{
            color: "79bbff",
            title: "Kicked member",
            description: `<@${member.id}>は\`Kick\`されました`,
            timestamp: new Date(),
            footer: {
                icon_url: message.guild.iconURL(),
                text: "©️無名鯖 | setuna/Soso"
            },
        }]})
    }
}