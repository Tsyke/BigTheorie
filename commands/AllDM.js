const config = require("../config.json")
const Discord = require('discord.js');
module.exports = {
        name: "alldm",
        description: "i see",
        cate: 'Owner Private',
        async run(client, message, args) {

            const idowner = `${config.botstat.ownerID}`
            if (message.author.id === idowner) {
                let dmGuild = message.guild;
                let msg = args.slice(0).join(" ");
                if (!msg || msg.length <= 1) {
                    const embed = new Discord.MessageEmbed()
                        .addField(":x: Échec de l'envoi", "Message not specified")
                        .addField(":eyes: Écoutez !", "Chaque caractère après la commande sera envoyé,\n et apparemment il n'y avait rien à envoyer.");
                    message.channel.send({ embed: embed });
                    return;
                }
                let memberarray = dmGuild.members.cache.array();
                let membercount = memberarray.length;
                let botcount = 0;
                let successcount = 0;
                console.log(`Répondre à ${message.author.username} : Envoi d'un message à tous les membres ${membercount} de ${dmGuild.name}.`)
                for (var i = 0; i < membercount; i++) {
                    let member = memberarray[i];
                    if (member.user.bot) {
                        console.log(`Ignorer le bot avec le nom ${member.user.username}`)
                        botcount++;
                        continue
                    }
                    let timeout = Math.floor((Math.random() * (10 - 0.01)) * 1000) + 10;
                    await sleep(timeout);
                    if (i == (membercount - 1)) {
                        console.log(`Patientez ${timeout}ms. \t\\/\tDMing ${member.user.username}`);
                    } else {
                        console.log(`Patientez ${timeout}ms. \t|${i + 1}|\tDMing ${member.user.username}`);
                    }
                    try {
                        member.send(`${msg} `);
                        successcount++;
                    } catch (error) {
                        console.log(`Échec de l'envoi du DM ! ` + error)
                    }
                }
                console.log(`Envoie de ${successcount} ${(successcount != 1 ? `messages` : `message`)} avec succès,` +
            `${botcount} ${(botcount != 1 ? `bots` : `bot`)} ignoré.`);
        
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
        } else {
            return message.reply({content:"Cette commande est réversé à: " + `${client.users.cache.get(idowner).tag}`})
        }

    }  
}