const MemberRole = require("../functions/default-permisson.json")
module.exports = async(message,args = []) => {
    if(!args[0])return
    if(!args[1])return
    const GettedMember = await message.guild.members.fetch()
    const NameReg = new RegExp(args[1],args[2]?args[2]:"u")
    const GettedReg = GettedMember.filter(i=>NameReg.test(i.user.username))
    if(args[0]=="kick"){
        GettedReg.forEach(async Get => {
            const Gmember = await message.guild.members.fetch(Get.user.id)
            Gmember.kick()
            message.channel.send({embeds: [{
                color: "79bbff",
                title: "Kicked member",
                description: `<@${Gmember.id}>は\`Kick\`されました`,
                timestamp: new Date(),
                footer: {
                    icon_url: message.guild.iconURL(),
                    text: "©️無名鯖 | setuna/Soso"
                },
            }]})
        });
        return;
    }
    if(args[0]=="ban"){
        GettedReg.forEach(async Get => {
            const Gmember = await message.guild.members.fetch(Get.user.id)
            Gmember.ban()
            message.channel.send({embeds: [{
                color: "79bbff",
                title: "Kicked member",
                description: `<@${Gmember.id}>は\`Kick\`されました`,
                timestamp: new Date(),
                footer: {
                    icon_url: message.guild.iconURL(),
                    text: "©️無名鯖 | setuna/Soso"
                },
            }]})
        });
        return;
    }
    if(args[0]=="warn"){
        GettedReg.forEach(async Get => {
            const Gmember = await message.guild.members.fetch(Get.user.id)
            Gmember.roles.cache.forEach(element => {
                Gmember.roles.remove(element.id)
            });
            message.channel.send({embeds: [{
                color: "79bbff",
                title: "Kicked member",
                description: `<@${Gmember.id}>は\`Warn\`されました`,
                timestamp: new Date(),
                footer: {
                    icon_url: message.guild.iconURL(),
                    text: "©️無名鯖 | setuna/Soso"
                },
            }]})
        });
        return;
    }
    if(args[0]=="unwarn"){
        GettedReg.forEach(async Get => {
            const Gmember = await message.guild.members.fetch(Get.user.id)
            Gmember.roles.add(MemberRole.member)
            message.channel.send({embeds: [{
                color: "79bbff",
                title: "Kicked member",
                description: `<@${Gmember.id}>は\`Warn\`されました`,
                timestamp: new Date(),
                footer: {
                    icon_url: message.guild.iconURL(),
                    text: "©️無名鯖 | setuna/Soso"
                },
            }]})
        });
        return;
    }
    if(args[0]=="get"){
        GettedReg.forEach(async Get => {
            const Gmember = await message.guild.members.fetch(Get.user.id)
            message.channel.send({embeds: [{
                color: "79bbff",
                title: "Get user info",
                description: `<@${Gmember.id}>`,
                timestamp: new Date(),
                footer: {
                    icon_url: message.guild.iconURL(),
                    text: "©️無名鯖 | setuna/Soso"
                },
            }]})
        });
        return;
    }
}