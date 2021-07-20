const Discord = require('discord.js');
exports.run = async(client, message) => {
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mükemmel dans ediyorsun!')
    .setColor(3447003)
    .setImage(`https://i.gyazo.com/b1cbe83496e3bfe2dc2de30083f77dbe`)
    return message.channel.send(vatan);
} //mrk
  //coders area
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dans','danset'],
  permLevel: 0
};

exports.help = {
  name: 'dans-et',
  description: '',
  usage: ''
};