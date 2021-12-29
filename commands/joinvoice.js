module.exports = {
    name: "joinv",
    description: "i see",
    cate: 'Fun',
    async run(client, message, args) {

        const config = require("../config.json")
        const idowner = `${config.botstat.ownerID}`
        if (message.author.id === message.author.id) {
            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel) {
                return message.reply('Veuillez d\'abord rejoindre un salon vocal!');
            }
            const connection = await voiceChannel.join();
            const dispatcher = connection.play('https://unliimiitedworld.000webhostapp.com/fbi.mp3');
        }
    }
}