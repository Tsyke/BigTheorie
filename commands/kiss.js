const client = require('nekos.life');
const neko = new client();
const Discord = require('discord.js');
const config = require("../config.json")

module.exports = {
    name: "kiss",
    description: "i see",
    cate: 'Fun',
    async run(client, message, args) {
        message.delete()
        const idowner = `${config.botstat.ownerID}`

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return

        neko.sfw.kiss().then(neko => {

            var embed = new Discord.MessageEmbed()
                .setDescription(`${message.author} embrasse ${user}`)
                .setImage(`${neko.url}`)
                .setColor("RANDOM")
            message.channel.startTyping();
            message.channel.send({ embed: embed })
            message.channel.stopTyping();

            console.log(`Kiss [1]`)
        })


    }
}