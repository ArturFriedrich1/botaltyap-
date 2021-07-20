const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬▬▬[ 📅 **Tarih Komutları** 📅 ]▬▬▬▬▬▬

> **» !soğuksavaş :** *Soğuk Savaş (İngilizce: Cold War, Rusça: Холодная война), iki Süper güç olan ABD önderliğinde Batı Bloku ile Sovyetler Birliği'nin önderliğinde Doğu Bloku ülkeleri arasında 1947'den 1991'e kadar devam etmiş olan uluslararası siyasi ve askeri gerginlik. ... Soğuk Savaş döneminde NATO, "Batı İttifakı" olarak da biliniyordu.**

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
    name: 'soğuksavaş', 
    description: 'The Help Command',
    usage: 'soğuksavaş'
};