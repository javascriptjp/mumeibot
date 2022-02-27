const MemberRole = require("../functions/default-permisson.json")
module.exports = async (message) => {
    const member = await message.mentions.members.first()
    await member.roles.cache.forEach(async element => {
        await member.roles.remove(element.id)
    });
    await member.roles.add(MemberRole.warn)
    MemberRole.ignore.forEach(async i=>{
        member.roles.add(i)
    })
    await message.channel.send({embeds: [{
        color: "79bbff",
        title: "`Warning Member`",
        description: `<@${member.id}>は\`Warn\`されました`,
        timestamp: new Date(),
        footer: {
            icon_url: message.guild.iconURL(),
            text: "©️無名鯖 | setuna/Soso"
        },
    }]})
    return;
}