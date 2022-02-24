module.exports = async(message,args) => {
    const GettedUser = await message.guild.fetch().filter()
    console.log(GettedUser)
}