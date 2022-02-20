const config = require("../bot_configs/logger.json")
module.exports = message => {
    const file = message.attachments.first();
    const isFile = (file == undefined) ? false : true;
    const isNoContent = (message.content=="") ? true : false;
    if(isFile){
        const files = message.attachments.map(attachment => attachment.url)
        if(isNoContent){
            message.guild.channels.cache.get(config.picmessages).send({embeds: [{
                color: "79bbff",
                title: message.author.tag,
                description: "```<No content>```",
                timestamp: new Date(),
                thumbnail: {url: message.author.avatarURL()},
                footer: {
                    icon_url: message.guild.iconURL(),
                    text: "©️無名鯖 | setuna/Soso"
                },
                fields: [{
                    name: "MessageLink",
                    value: `[ClickToMessage](${message.url})\n<#${message.channel.id}>`
                }
                ,{
                    name: "Files",
                    value: files.map(i=>`[${i.split("/").pop()}](${i})`).join("\n")
                }]
            }]})
        }else{
            message.guild.channels.cache.get(config.picmessages).send({embeds: [{
                color: "79bbff",
                title: message.author.tag,
                description: `\`\`\`${message.content.replace(/```/g,"\'\'\'")}\`\`\``,
                timestamp: new Date(),
                thumbnail: {url: message.author.avatarURL()},
                footer: {
                    icon_url: message.guild.iconURL(),
                    text: "©️無名鯖 | setuna/Soso"
                },
                fields: [{
                    name: "MessageLink",
                    value: `[ClickToMessage](${message.url})\n<#${message.channel.id}>`
                }
                ,{
                    name: "Files",
                    value: files.map(i=>`[${i.split("/").pop()}](${i})`).join("\n")
                }]
            }]})
        }
    }else{
        message.guild.channels.cache.get(config.messages).send({embeds: [{
            color: "79bbff",
            title: message.author.tag,
            description: `\`\`\`\n${message.content.replace(/```/g,"\'\'\'")}\n\`\`\``,
            timestamp: new Date(),
            thumbnail: {url: message.author.avatarURL()},
            footer: {
                icon_url: message.guild.iconURL(),
                text: "©️無名鯖 | setuna/Soso"
            },
            fields: [{
                name: "MessageLink",
                value: `[ClickToMessage](${message.url})\n<#${message.channel.id}>`
            }]
        }]})
    }
};