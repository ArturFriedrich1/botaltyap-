const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Balık Tuttun Balığı Çekiyorsun..").then(message => {

var mrk = [

      "**Sazan Tuttun!** :fish:",
      "**Köpek Balığı Tuttun .d**",
      "**Uskumru Tuttun!** :fish:",
      "**Mezgit Tuttun!** :fish:",
      "**Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?**",
      "**Hamsi Tuttun!** :fish:",
      "**Levrek Tuttun!** :fish:",
      "**Hiçbirşey Tutamadın Maalesef!** :wastebasket:",
      "**Alabalık Tuttun!** :fish:",
      "**Maalesef Balık Oltadan Kaçtı!** :wastebasket:",
      "**İstavrit Tuttun!** :fish:"

    ];

    var mrk = mrk[Math.floor(Math.random() * mrk.length)];
    message.edit(`${mrk}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["balıktut"],
  permLevel: 0
};

exports.help = {
  name: "balık-tut",
  description: "Balık Tutarsın.",
  usage: "balıktut"
};
