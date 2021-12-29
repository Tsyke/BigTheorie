const Discord = require('discord.js');
const figlet = require('figlet');
const config = require("../config.json")
module.exports = {
    name: "ascii",
    description: "Say Date",
    cate: 'Fun',

    async run(client, message, args) {

        const idowner = `${config.botstat.ownerID}`
        if (message.author.id === message.author.id) {


            if (!args[0]) return message.channel.send('Veuillez fournir un texte');
            msg = args.join("");

            figlet.text(msg, function(err, data) {
                if (err) {
                    console.log('Quelque chose s\'est mal passé');
                    console.dir(err);
                }
                if (data.length > 2000) return message.channel.send('Caractère max 2000')

                message.channel.startTyping();
                message.channel.send('```' + data + '```')
                message.channel.stopTyping();
            })
        }
    }
}