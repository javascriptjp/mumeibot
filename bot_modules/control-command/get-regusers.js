module.exports = async(message,args) => {
    const GettedUser = await message.guild.fetch()
    console.log(GettedUser)
}