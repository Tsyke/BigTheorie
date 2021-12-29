const client = require('nekos.life');
const neko = new client();
const Discord = require('discord.js');
const config = require("../config.json")

module.exports = {
    name: "embed",
    description: "i see",
    cate: 'Fun',

    async run(client, message, args) {
        message.delete()

        const idowner = `${config.botstat.ownerID}`

        const user = args.join(' ')
        if (!user) return
        message.channel.send({ embed: new Discord.MessageEmbed().setDescription(`${user}`).setColor("RANDOM") })

    }
}