const ROLES = require("../bot_configs/join-roles.json")
module.exports = (member) =>{
    ROLES.forEach(element => {
        member.roles.add(element)
    });
}