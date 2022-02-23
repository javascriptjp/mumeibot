const ROLES = require("../bot_configs/")
module.exports = (member) =>{
    ROLES.forEach(element => {
        member.roles.add(element)
    });
}