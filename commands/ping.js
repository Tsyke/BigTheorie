const client = require('nekos.life');
const neko = new client();
const Discord = require('discord.js');
const config = require("../config.json")

module.exports = {
    name: "ping",
    description: "i see",
    cate: 'Utile',
    async run(client, message, args) {
        message.delete()
        message.channel.send({
            embed: new Discord.MessageEmbed()
                .setDescription(`Le ping du selfBot: ${client.ping}ms`)
                .setColor("RANDOM")
        })

    }
}