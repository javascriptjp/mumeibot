const config = require("./join-send-message.json")
module.exports = async (client,member) =>{
    client.channels.cache.get(config.channel).send(`<@${member.id}>`)
    client.channels.cache.get(config.channel).send({embeds: [{
        color: "79bbff",
        title: `<@${member.id}>さんようこそ無名鯖へ!`,
        description: `<#945853334949093416>へ自己紹介をして参加ください!
        また<#945838590674501642>でルールを確認してお楽しみください!`,
        timestamp: new Date(),
        footer: {
            icon_url: message.guild.iconURL(),
            text: "©️無名鯖 | setuna/Soso"
        },
    }]})
}