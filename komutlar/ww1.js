const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬▬▬[ 📅 **Tarih Komutları** 📅 ]▬▬▬▬▬▬

> **» !ww1 :** **1914-1918 yılları arasına yapılan 1. Dünya Savaşı, İtilaf ve İttifak devletlerinin hammadde ve sömürge arayışı başta olmak üzere birçok nedenle katıldığı bir savaştır. Osmanlı Devleti savaşın başlangıcında her ne kadar tarafsızlığını ilan etse de savaşa girmeye zorlanmış ve savaşa dâhil olmuştur.**

`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'ww1', 
    description: 'The Help Command',
    usage: 'ww1'
};