module.exports = async(message) => {
    message.channel.send({embeds: [{
        color: "79bbff",
        title: "`Rebooting bot`",
        description: `ボットは\`5\`秒後に\`再起動\`されます`,
        timestamp: new Date(),
        footer: {
            icon_url: message.guild.iconURL(),
            text: "©️無名鯖 | setuna/Soso"
        },
    }]})
    setTimeout(()=>{
        process.exit(0)
    },5000)
}