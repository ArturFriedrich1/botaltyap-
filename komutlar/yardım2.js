const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
let prefix = ayarlar.prefix
const yardım = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(`Mr Bot v0.9`)
.setTitle(" Mr Bot Yardım Menüsüne Hoşgeldin! ")
 .setTimestamp()
 .addField(`**${prefix}eğlence**`,"**Eğlence Komutlarını Gösterir** :infinity:")
 .addField(`**${prefix}çeviri**`,"**Çeviri Komtlarını Gösterir** :earth_americas:")
 .addField(`**${prefix}moderasyon**`,"**Moderasyon Komtlarını Gösterir** :gear: ")
 .addField(`**${prefix}tarih**`,"**Tarih Hakkında Bilgi Verir** :calendar_spiral:  ")
 .addField(`**${prefix}komutlar**`,"**Bütün Komutları Gösterir** :clapper: ")
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
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}