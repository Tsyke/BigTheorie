console.log(`\n\nAttente de 20s (Prévention API)\n\n`)

const Discord = require('discord.js-selfbot-v11');

const client = new Discord.Client();

const config = require("./config.json")
const token  = `${config.botstat.tokenbot}`;
const{ readdirSync } = require('fs');
const { join } = require('path');
const { textSync } = require('figlet');
const { default: chalk } = require('chalk');
client.commands = new Discord.Collection();
const prefix = `${config.botstat.prefix}`;

const commandsFiles = readdirSync(join(__dirname,"commands")).filter(file => file.endsWith(".js"))

for (const file of commandsFiles){
    const command = require(join(__dirname,"commands",`${file}`));
    client.commands.set(command.name, command);
}

client.on('ready',()=> {
    console.log(chalk.red(textSync('BigTheorie', { horizontalLayout: 'full' })));
    console.log(chalk.red(`_________________________________________________________________`))
    console.log(chalk.green(`Connecter sous le nom de: `) + chalk.blue(`${client.user.tag}`))
    console.log(chalk.green(`Commande utilisable: `) + chalk.blue(client.commands.size))
    console.log(chalk.green(`\n\nCrée par: `) + chalk.magenta("Tsyke#7428"))
    client.user.setActivity("Use BigTheorie by Tsyke#7428",{ type: 'PLAYING' })

});

client.on("message", async message => {
    if (message.content.startsWith(prefix)){
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(!client.commands.has(command)) return;
        try{
            client.commands.get(command).run(client,message,args);
        }catch(error){
            console.log(error);
        }
    }
})
client.login(token);