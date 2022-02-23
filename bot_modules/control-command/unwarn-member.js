const MemberRole = require("../functions/default-permisson.json")
module.exports = async (message) => {
    const member = message.mentions.members.first()
    member.roles.add(MemberRole.member)
    message.channel.send({embeds: [{
        color: "79bbff",
        title: "`Delete Warn Member`",
        description: `<@${member.id}>は\`Unwarn\`されました`,
        timestamp: new Date(),
        footer: {
            icon_url: message.guild.iconURL(),
            text: "©️無名鯖 | setuna/Soso"
        },
    }]})
    return;
}