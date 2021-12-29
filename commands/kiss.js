const { MessageEmbed } = require('discord.js');
const superagent = require('superagent')
module.exports = {
    name: "kiss",
    desc: "Affiche un embed",
    permission: "Aucune",
    cate: 'Fun',
    aliases: 'Aucun',

    async run(client, message, args) {
        const embed = new MessageEmbed();
        const { body } = await superagent.get("https://nekos.life/api/v2/img/kiss")

        if (message.mentions.users.first() && message.mentions.users.first().id != message.author.id) {
            embed.setColor("RANDOM");
            embed.setTitle(`${message.author.username} kiss ${message.mentions.users.first().username} ❤`);
            embed.setImage(body.url);
        } else {
            embed.setColor("RANDOM");
            embed.setTitle(`${message.author.username} S'auto kiss ❤`);
            embed.setImage(body.url);
        }
        message.channel.send({ embed: embed })

    }
}