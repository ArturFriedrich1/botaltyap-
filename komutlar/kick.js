const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  if (!args[0])
    return message.channel.send(
      `**Mr Bot | Lütfen Kimi Kicklemek İstediğinizi Belirtin!** **(Lütfen kullanıcı İD veya kullanıcı adını belirtin**)`
    );
  let User = message.guild.members.cache.get(args[0]);
  if (!User)
    return message.channel.send(
      `**Mr Bot | Bu Sunucudaki Bir Kullanıcı Değil! Tekrar Deneyin**`
    );
  let Reason = message.content.split(`!kick ${User.id} `);
  if (!args[1])
    return message.channel.send(
      `**Mr Bot | Lütfen Bir Neden Belirtin! Nedeni Olmayan Birini Yasaklayamazsın, Değil mi?**`
    );
  if (!Reason)
    return message.channel.send(
      `**Mr Bot | Lütfen Bir Neden Belirtin! Nedeni Olmayan Birini Yasaklayamazsın, Değil mi?**`
    );
  if (!User.kickable)
    return message.channel.send(
      `Mr Bot | You can not kick this user, they may have a role higher then me or the same role as me.`
    );
  if (!message.member.permissions.has("KICK_MEMBERS"))
    return message.channel.send(`**Bu Komutu Kullanmaya Yetkin Yok, Biraz Daha Büyü :)**`);
  User.kick(Reason);
  const ukqzn = new MessageEmbed()
    .setTitle(`Mr Bot | You have kicked a member!`)
    .setDescription(
      `Mod Bot | Bu Kullanıcı ${
        client.users.cache.get(User.id).username
      } ***Başarıyla Sunucudan Kicklendi!***`
    )
    .setColor(`RANDOM`);
  message.channel.send(ukqzn);
      //ukqzn
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],                             //sa
  permLevel: 0
};

exports.help = {
  name: "kick",
  description: "",
  usage: ""
};