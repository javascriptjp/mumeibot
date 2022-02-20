module.exports = async (message) => {
    message.channel.send({embeds: [{
        color: "79bbff",
        title: "`Error`",
        description: `\`\`\`\n権限が足りません\n\`\`\``,
        timestamp: new Date(),
        footer: {
            icon_url: message.guild.iconURL(),
            text: "©️無名鯖 | setuna/Soso"
        },
    }]})
}