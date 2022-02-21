const lastSendTime = {}
module.exports = (message) => {
    if (lastSendTime[msg.channel.id]) {
        if (Date.now() - lastSendTime[msg.channel.id][msg.author.id] <= 1000){
            const Reply_message = message.channel.send("")
            return true
        }
        lastSendTime[msg.channel.id][msg.author.id] = Date.now()
    } else {
        lastSendTime[msg.channel.id] = {}
        lastSendTime[msg.channel.id][msg.author.id] = Date.now()
    }
    return false
}