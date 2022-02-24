module.exports = async(message,args = []) => {
    if(!args[0])return
    if(!args[1])return
    const GettedMember = await message.guild.members.fetch()
    const NameReg = new RegExp(args[1],args[2]?args[2]:"u")
    const GettedReg = GettedMember.filter(i=>NameReg.test(i.user.username))
    if(args[0]=="kick"){
        GettedReg.forEach(Get => {
            const Gmember = message.guild.members.fetch(Get.user.id)
            Gmember.kick()
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
        });
        return;
    }
    if(args[0]=="ban"){
        GettedReg.forEach(Get => {
            const Gmember = message.guild.members.fetch(Get.user.id)
            Gmember.ban()
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
        });
        return;
    }
    if(args[0]=="get"){
        message.channel.send(GettedReg.user.username)
        GettedReg.forEach(Get => {
            const Gmember = message.guild.members.fetch(Get.user.id)
            Gmember.ban()
            message.channel.send({embeds: [{
                color: "79bbff",
                title: "Get user info",
                description: `<@${member.id}>`,
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