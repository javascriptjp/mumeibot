const config = require("./react-to-text-fix.json")
module.exports = message => {
    if(message.channel.id==config.channel){
        setTimeout(()=>{
            message.react("👍")
        },1000)
    }
}