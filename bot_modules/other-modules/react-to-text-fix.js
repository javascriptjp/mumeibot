const config = require("./react-to-text-fix.json")
module.exports = message => {
    if(message.channel.id==config.channel){
        if(beforeMessage.author.id!==config.BotId)return
        setTimeout(()=>{
            message.react("👍")
        },1000)
    }
}