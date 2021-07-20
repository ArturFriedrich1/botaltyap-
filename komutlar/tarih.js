const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
let prefix = ayarlar.prefix
const yardım = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(`Mr Bot v0.9`)
.setTitle(" Mr Bot Tarih Menüsüne Hoşgeldin! ")
 .setTimestamp()
 .addField(`**${prefix}ww1**`,"**1.Dünya Savaşı Hakıında Bilgi Verir** 📜")
 .addField(`**${prefix}ww2**`,"**2.Dünya Savaşı Hakkında Bilgi Verir** 📜")
 .addField(`**${prefix}soğuksavaş**`,"**Soğuk Savaş Hakkında Bilgi Verir** 📜")
.setThumbnail(message.author.avatarURL({dynamic : true}))
message.channel.send(yardım)
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'tarih',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!tarih'
}