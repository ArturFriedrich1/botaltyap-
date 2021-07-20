const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬▬▬[ 📅 **Tarih Komutları** 📅 ]▬▬▬▬▬▬

> **» !ww2 :** **Genel olarak 2. Dünya savaşı: Savaş 1 Eylül 1939'da Almanya'nın Polonya'yı işgali ile başlamış,  2 Eylül 1945 tarihinde müttefik devletlerin zaferi ile sonuçlanmıştır. Savaşa ABD, İngiltere, Fransa, SSCB, müttefik devletler olarak; Almanya (Nazi), İtalya ve Japonya mihver devletleri adı altında katılmıştır.**

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
    name: 'ww2', 
    description: 'The Help Command',
    usage: 'ww2'
};