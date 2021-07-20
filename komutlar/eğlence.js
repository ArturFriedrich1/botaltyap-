const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
let prefix = ayarlar.prefix
const yardım = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(`Mr Bot v0.9`)
.setTitle(" Mr Bot Yardım Menüsüne Hoşgeldin! ")
 .setTimestamp()
.addField(`**${prefix}atatürk**`,"**Bunu Neden Kendin Denemiyorsun?** :infinity:")
.addField(`**${prefix}balık-tut**`,"**Balık Tutarsınız** :fishing_pole_and_fish:")
.addField(`**${prefix}duello**`,"**Birsinle Düello Atarsanız** :crossed_swords:")
.addField(`**${prefix}efkar**`,"**Efkarınızı Ölçersiniz** :champagne_glass:")
.addField(`**${prefix}korona**`,"**Korona Günlük Son Dakika Verileri** :mask:")
.addField(`**${prefix}yazdır**`,"**Bota Yazı Yazdırırısınız.** :pencil:")
.addField(`**${prefix}şekerye**`,"**Şekerin Tadı Güzel Mi ?** :candy:")
.addField(`**${prefix}dans-et**`,"**Dans Edersiniz.** :people_wrestling:")
.addField(`**${prefix}hesapla**`,"**Basit Bir Matematik İşlemi Hesaplatırsınız.** :computer:")
.addField(`**${prefix}ara155**`,"**Polis Gelir.** :police_officer:")
.addField(`**${prefix}ara112**`,"**Ambulans Gelir.** :scientist:")
.addField(`**${prefix}ara110**`,"**İtfaiye Gelir.** :firefighter:")
.addField(`**${prefix}hacının-şalgamı**`,"**Hacının Şalgamı, İçen Bilir!.** :wine_glass:")
.addField(`**${prefix}kaçcm**`,"**Malafatının Uzunluğunu Söyler.** :flushed:")
.addField(`**${prefix}ömrüm**`,"**Kalan Ömrünü Gösterir** :clock10: ")
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
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Eğlence Menüsü.',
   usage:'!eğlence'
}