const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "i see",
    cate: 'Utile',
    async run(client, message, args) {
        var util = [],
            fun = [],
            owner = [];

        await client.commands.forEach(command => {
            if (command.cate === "Utile") util.push(`\`${command.name}\``)
            if (command.cate === "Fun") fun.push(`\`${command.name}\``)
            if (command.cate === "Owner Private") owner.push(`\`${command.name}\``)
        });

        var helpEmbed = new Discord.MessageEmbed()
            .addField("Utile", util.join(" "))
            .addField("Fun", fun.join(" "))
            .addField("Privé owner", owner.join(" "))
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/avatars/921813198758371419/a9ff2b6eef2677105b639d278ef4388b.webp")
        message.channel.send({ embed: helpEmbed })

    }
}