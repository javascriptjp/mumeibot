module.exports = async(message,args) => {
    const GettedUser = await message.guild.members.fetch()
    console.log(GettedUser)
}