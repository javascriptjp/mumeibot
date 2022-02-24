require('dotenv').config();
const Discord = require("discord.js")
const GenUUId = require("./bot_modules/functions/uuidgenerator")
const config = require("./bot_configs/main.json")
const options = { intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MEMBERS"] };
const client = new Discord.Client(options)
const now_code = {code:GenUUId(),online:false}
const Modules = {
    logger : require("./bot_modules/messagelogger.js"),
    memberlogger : require("./bot_modules/memberlogger.js"),
    threadlogger : require("./bot_modules/threadlogger"),
    voicelogger : require("./bot_modules/voicelogger.js"),
    editlogger : require("./bot_modules/editlogger.js"),
    ControlCommand : require("./bot_modules/control-commands.js"),
    AntiSpam : require("./bot_modules/AntiSpam.ins/AntiSpam.v2.js"),
    GetPermission : require("./bot_modules/functions/get-permissions.js"),
    JoinAddRole : require("./bot_modules/join-add-role.js")
}

client.on("messageCreate",async message=>{
    if(message.author.bot)return
    if(!Modules.GetPermission(message)){
        const AntiSpamUtil = await Modules.AntiSpam(message)
        if(AntiSpamUtil) return
    }
    if(!message.author.bot)Modules.logger(message)
    const [command, ...args] = message.content.split(/(?:"([^"]+)"|([^ ]+)) ?/).filter(e => e)
    if (message.content.startsWith("a!")){
        Modules.ControlCommand(command, args, message, Discord, client, config, now_code)
    }
})

client.on('interactionCreate', async (interaction) => {
    const [command, ...args] = interaction.customId.split(/(?:"([^"]+)"|([^ ]+)) ?/).filter(e => e)
});

client.on("ready",async ()=>{
    now_code.online = true
    client.user.setActivity('無名bot via 13\nb3', { type: 'WATCHING' })
    console.log(`logined:${now_code.code}`)
})

client.on("messageUpdate",(oldMessage,newMessage)=>{
    if(oldMessage.author.bot)return;
    Modules.editlogger(oldMessage,newMessage)
})

client.on('guildMemberAdd', member => {
    Modules.memberlogger("join", member)
    Modules.JoinAddRole(member)
})

client.on('guildMemberRemove', member => {Modules.memberlogger("leave", member)})
client.on("threadCreate", (thread) => {Modules.threadlogger(thread)});
client.on("voiceStateUpdate",  (oldState, newState) => {
    if(newState && oldState){
        if(oldState.channelId===newState.channelId){
            if(oldState.selfDeaf!==newState.selfDeaf)Modules.voicelogger("selfdeaf",newState.member,newState.channel,newState.selfDeaf)
            if(oldState.selfMute!==newState.selfMute)Modules.voicelogger("selfmute",newState.member,newState.channel,newState.selfMute)
            if(oldState.selfVideo!==newState.selfVideo)Modules.voicelogger("selfvideo",newState.member,newState.channel,newState.selfVideo)
            if(oldState.serverDeaf!==newState.serverDeaf)Modules.voicelogger("serverdeaf",newState.member,newState.channel,newState.serverDeaf)
            if(oldState.serverMute!==newState.serverMute)Modules.voicelogger("servermute",newState.member,newState.channel,newState.serverMute)
        }
        if(oldState.channelId===null && newState.channelId != null)Modules.voicelogger("connect",newState.member,newState.channel,true)
        if(oldState.channelId !=null && newState.channelId === null)Modules.voicelogger("disconnect",newState.member,oldState.channel,true)
    }
});

process.on('uncaughtException',(err) => {
    if(now_code.online){
        client.channels.cache.get(config.errorChannel).send({embeds: [{
            color: "79bbff",
            title: "`ServerError`",
            description: `\`\`\`\n${err.message}\n\`\`\``,
            timestamp: new Date(),
            footer: {
                icon_url: client.guilds.cache.get(config.guildId).iconURL(),
                text: "©️無名鯖 | setuna/Soso"
            },
        }]})
    }else{
        console.log(err)
    }
});
client.login(process.env.token)