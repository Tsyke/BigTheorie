const config = require("../config.json")

module.exports = {
    name: "say",
    description: "i see",
    cate: 'Fun',
    async run(client, message, args) {
        message.delete()
        const user = message.mentions.members.first() || client.guild.members.cache.get(args[0]);
        if (!user) return

        const wb = await message.channel.createWebhook(user.nickname ? user.nickname : user.user.username, {
            avatar: user.user.displayAvatarURL(),
        });
        await wb.send({ content: args.slice(1).join(" ") })
        wb.delete()


    }
}