const Modules = {
    NoPermission : require("./control-command/no-permissions.js"),
    CommandsHelp : require("./control-command/command-helps.js"),
    CreateChannel : require("./control-command/create-channel.js"),
    DeleteChannel : require("./control-command/delete-channel.js"),
    FetchMessage : require("./control-command/fetch-message.js"),
    KickMember : require("./control-command/kick-member.js"),
    BanMember : require("./control-command/ban-member.js"),
    WarnMember : require("./control-command/warn-member.js"),
    UnwarnMember : require("./control-command/unwarn-member.js"),
    GetReg : require("./control-command/get-regusers.js")
}

module.exports = async (command,args,message,Discord,client,config,NpIiD) => {
    if(!message.member.permissions.has("ADMINISTRATOR"))return Modules.NoPermission(message)
    if(command=="a!help")return Modules.CommandsHelp(message)
    if(command=="a!create-channel")return Modules.CreateChannel(args,message,config)
    if(command=="a!cc")return Modules.CreateChannel(args,message,config)
    if(command=="a!delete-channel")return Modules.DeleteChannel(message)
    if(command=="a!dc")return Modules.DeleteChannel(message)
    if(command=="a!fetch")return Modules.FetchMessage(message,args)
    if(command=="a!kick")return Modules.KickMember(message,args)
    if(command=="a!ban")return Modules.BanMember(message,args)
    if(command=="a!warn")return Modules.WarnMember(message)
    if(command=="a!unwarn")return Modules.UnwarnMember(message)
    if(command=="a!gr")return Modules.GetReg(message,args)
}