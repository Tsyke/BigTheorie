module.exports = {
    getMember: function(message, toFind = '') {
        toFind = toFind.toLowerCase();
        let target = message.guild.members.get(toFind);

        if (!target && message.mentions.members)
            target = message.mentions.members.first();
        if (!target && toFind) {
            target = message.guild.members.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                    member.user.tag.toLowerCase().includes(toFind)
            });
        }
        if (!target)
            target = message.member;

        return target;
    },

    formatDate: function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    },

    shuffle: function(array) {
        var i = array.length,
            j = 0,
            temp;

        while (i--) {

            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }

        return array;
    },

    promptMessage: async function(message, author, time, validReactions) {
        time *= 1000;

        for (const reaction of validReactions) await message.react(reaction);

        const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;

        return message
            .awaitReactions(filter, { max: 1, time: time })
            .then(collected => collected.first() && collected.first().emoji.name);
    },
    sleep: function(loger, time) {
        setTimeout(() => { console.log(`${loger}!`); }, time);
    },
    downloder: function(url) {
        const ytdl = require('ytdl-core');

        ytdl(url).pipe(fs.createWriteStream('../music/video.mp4'));
    },

    sender: function() {
        const attachment = new Discord.MessageAttachment('../music/music.mp3');
        message.channel.send('Your File', attachment)
    }
}