const Modules = {
    NoPermission : require("./control-command/no-permissions.js"),
    CommandsHelp : require("./control-command/command-helps.js"),
    CreateChannel : require("./control-command/create-channel.js"),
    DeleteChannel : require("./control-command/delete-channel.js"),
    FetchMessage : require("./control-command/fetch-message.js"),
}
module.exports = async (command,args,message,Discord,client,config,NpIiD) => {
    if(!message.member.permissions.has("ADMINISTRATOR"))return Modules.NoPermission(message)
    if(command=="s!help")Modules.CommandsHelp(message)
    if(command=="s!create-channel")Modules.CreateChannel(args,message,config)
    if(command=="s!cc")Modules.CreateChannel(args,message,config)
    if(command=="s!delete-channel")Modules.DeleteChannel(message)
    if(command=="s!dc")Modules.DeleteChannel(message)
    if(command=="s!fetch")Modules.FetchMessage(message,args)
}