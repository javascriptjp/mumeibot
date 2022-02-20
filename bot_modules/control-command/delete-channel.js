module.exports = async (message) => {
    if(message.mentions.channels.size !== 0) {
        const channel = message.mentions.channels.first()
        channel.delete().then(()=>{
            message.channel.send({embeds: [{
                color: "79bbff",
                title: "`通知`",
                description: `\`\`\`\n処理が成功しました\n\`\`\``,
                timestamp: new Date(),
                footer: {
                    icon_url: message.guild.iconURL(),
                    text: "©️無名鯖 | setuna/Soso"
                },
            }]})
        }).catch(err => {
            message.channel.send.send({embeds: [{
                color: "79bbff",
                title: "`Error`",
                description: `\`\`\`\n${err.message}\n\`\`\``,
                timestamp: new Date(),
                footer: {
                    icon_url: message.guild.iconURL(),
                    text: "©️無名鯖 | setuna/Soso"
                },
            }]})
        });
    }else{
        const channel = message.channel
        channel.delete()
    }
}