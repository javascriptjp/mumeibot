const ROLE = require("./permissions.json")
module.exports = async (message) => {
    const member = message.member
    let count = 0
    ROLE.forEach(i=>{
        if(member.roles.cache.has(i))count++
    })
    if(count==0){
        return false
    }else{
        return true
    }
}