const MemberRole = require("../functions/default-permisson.json")
module.exports = async (message) => {
    const member = message.mentions.members.first()
    member.roles.cache.forEach(element => {
        member.roles.remove(element.id)
    });
    message.channel.send({embeds: [{
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