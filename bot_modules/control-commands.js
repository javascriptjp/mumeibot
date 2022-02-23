const Modules = {
    NoPermission : require("./control-command/no-permissions.js"),
    CommandsHelp : require("./control-command/command-helps.js"),
    CreateChannel : require("./control-command/create-channel.js"),
    DeleteChannel : require("./control-command/delete-channel.js"),
    FetchMessage : require("./control-command/fetch-message.js"),
    KickMember : require("./control-command/kick-member.js"),
    BanMember : require("./control-command/ban-member.js"),
    WarnMember : require("./control-command/warn-member.js")
}
module.exports = async (command,args,message,Discord,client,config,NpIiD) => {
    if(!message.member.permissions.has("ADMINISTRATOR"))return Modules.NoPermission(message)
    if(command=="s!help")return Modules.CommandsHelp(message)
    if(command=="s!create-channel")return Modules.CreateChannel(args,message,config)
    if(command=="s!cc")return Modules.CreateChannel(args,message,config)
    if(command=="s!delete-channel")return Modules.DeleteChannel(message)
    if(command=="s!dc")return Modules.DeleteChannel(message)
    if(command=="s!fetch")return Modules.FetchMessage(message,args)
    if(command=="s!kick")return Modules.KickMember(message,args)
    if(command=="s!ban")return Modules.BanMember(message,args)
    if(command=="s!warn")return Modules.BanMember(message)
}