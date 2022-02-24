module.exports = async(message,args) => {
    const GettedMember = await message.guild.members.fetch()
    const GettedReg = GettedMember.filter(i=>i.user.username=="Soso")
    GettedReg.forEach(Get => {
        message.channel.send(Get.user.username)
    });
}