const help_message = require("../help-files/commands.json")
module.exports = async (message) => {
    message.channel.send({embeds: [{
        color: "79bbff",
        title: "❓管理者コマンドヘルプ❓",
        description: `プレフィックスは\`a!\`です\nコマンドの実行方法は\`\`\`\na!<コマンド> <引数>\n\`\`\``,
        timestamp: new Date(),
        footer: {
            icon_url: message.guild.iconURL(),
            text: "©️無名鯖 | setuna/Soso"
        },
        fields:help_message,
    }]})
}