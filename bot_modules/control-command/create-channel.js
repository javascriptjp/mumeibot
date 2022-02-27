module.exports = async (args,message) => {
    if(message.mentions.members.size !== 0 || message.mentions.roles.size !== 0) {
        const mentionMembers = await message.mentions.members.map(m => m.user.id)
        const mentionRoles = await message.mentions.roles.map(m => m.id)
        const everyone = message.guild.roles.everyone;
        const Permissions = [{id: everyone.id,deny: 'VIEW_CHANNEL'}]
        mentionMembers.forEach(id => {
            Permissions.push({
                "id":id,
                allow: ['VIEW_CHANNEL','SEND_MESSAGES','READ_MESSAGE_HISTORY']
            })
        });
        mentionRoles.forEach(id => {
            Permissions.push({
                "id":id,
                allow: ['VIEW_CHANNEL','SEND_MESSAGES','READ_MESSAGE_HISTORY']
            })
        });
        message.guild.channels.create(args[0], {
            parent: message.channel.parent,
            permissionOverwrites: Permissions
        }).then(()=>{
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
            message.channel.send({embeds: [{
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
        message.guild.channels.create(args[0], {
            parent: message.channel.parent
        }).then(()=>{
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
            message.channel.send({embeds: [{
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
    }
}