const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Mr Bot | Moderasyon Menüsü")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`

**»** **!kick** : **Sunucudan Bir Üye Kickler.**
**»** **!yavaş-mod** : **Sohbete Yazma Sınır (süre) Ekler.**
**»** **!istatistik** : **Bot Hakkında Bilgi Verir.**
**»** **!küfür-engel** : **Küfür Engel Açıp Kapatırsın.**
**»** **!reklam-engelle** : **Reklam Engel Açıp Kapatırsın.**
**»** **!nuke** : **Kanala Nuke Atarsın.**
**»** **!ping** : **Botun Pingini Gösterir.**
**»** **!kanal-koruma** : **Kanalları Korur.**
**»** **!avatar** : **Avatarını Gösterir.**




`) 
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=728920362636542032&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/G5CZFT3) **|** [WebSitesi](http://ab.arrow-bot.tk/) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false,   
    aliases: ["mod"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'moderasyon', 
    description: 'yardım menüsü',
    usage: 'moderasyon'
  };