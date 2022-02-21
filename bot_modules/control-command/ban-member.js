module.exports = async (message, args = false) => {
    const member = message.mentions.members.first()
    if(!member){
        message.channel.send({embeds: [{
            color: "79bbff",
            title: "`Error`",
            description: `\`\`\`s!ban <@Member>\`\`\`\nで指定してください`,
            timestamp: new Date(),
            footer: {
                icon_url: message.guild.iconURL(),
                text: "©️無名鯖 | setuna/Soso"
            },
        }]})
    }else{
        member.ban()
        message.channel.send({embeds: [{
            color: "79bbff",
            title: "Banned member",
            description: `<@${member.id}>は\`Ban\`されました`,
            timestamp: new Date(),
            footer: {
                icon_url: message.guild.iconURL(),
                text: "©️無名鯖 | setuna/Soso"
            },
        }]})
    }
}