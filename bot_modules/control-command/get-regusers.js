module.exports = (message,args) => {
    message.guild.fetch().filter(i=>{
        console.log(i)
    })
}