const config = require("../bot_configs/logger.json")
module.exports = async (thread) => {
    let user
    await thread.fetchOwner().then(i=>{user = i.user})
    thread.guild.channels.cache.get(config.threadmessages).send({embeds: [{
        color: "79bbff",
        title: user.tag,
        description: `\`${user.tag}\`がスレッドを作成しました`,
        timestamp: new Date(),
        thumbnail: {url: user.avatarURL()},
        footer: {
            icon_url: thread.guild.iconURL(),
            text: "©️無名鯖 | setuna/Soso"
        },
        fields: [{
            name: "ThreadLink",
            value: `<#${thread.id}>`
        }]
    }]})
}