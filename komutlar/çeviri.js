const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle("Mr.Bot")
        
    .setDescription(
      `



:earth_asia:  **Çeviri Komutları ! - Mr. Bot Çeviri Komutları**
:white_small_square:**!almanca** = Türkçe Almanca Çeviri Yapar
:white_small_square:**!ingilizce** = Türkçe İngilizce Çeviri Yapar
:white_small_square:**!rusça** = Türkçe Rusça Çeviri Yapar
:white_small_square:**!fransızca** = Türkçe Almanca Çeviri Yapar
:white_small_square:**!yunanca** = Türkçe Yunanca Çeviri Yapar


`
    )
    .addField(
      `» Mr Bot Destek Sunucusu`,
      `**[Destek Sunucusu](https://discord.gg/KpfHZTps)**`
    )
    .setFooter(
      `${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  message.channel.send(mhelp).then;
  const sembed = new Discord.MessageEmbed();
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};

exports.help = {
  name: "çeviri",
  description: "",
  usage: "!çeviri"
};
