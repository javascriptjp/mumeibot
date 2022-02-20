const config = require("../bot_configs/logger.json")
module.exports = (oldMessage,newMessage) => {
    const OldisNoContent = (oldMessage.content=="") ? "<No content>" : oldMessage.content;
    const NewisNoContent = (newMessage.content=="") ? "<No content>" : newMessage.content;
    newMessage.guild.channels.cache.get(config.editmessages).send({embeds: [{
        color: "79bbff",
        title: newMessage.author.tag,
        description: `\`\`\`${NewisNoContent}\`\`\``,
        timestamp: new Date(),
        thumbnail: {url: newMessage.author.avatarURL()},
        footer: {
            icon_url: newMessage.guild.iconURL(),
            text: "©️無名鯖 | setuna/Soso"
        },
        fields: [{
            name: "MessageLink",
            value: `[ClickToMessage](${newMessage.url})\n<#${newMessage.channel.id}>`
        },
        {
            name: "Old message",
            value: `\`\`\`${OldisNoContent}\`\`\``
        }]
    }]})
}