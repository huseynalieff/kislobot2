const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:page_facing_up: Kislo Yardım Menüsü**")
    .setColor("#15f153")
    .addField("!eğlence", "Eğlence komutlarını gösterir")
	.addField("!eğlence2", "Eğlence2 komutlarını gösterir")
    .addField("!kullanıcı:", "Kullanıcı komutlarını gösterir")
    .addField("!yetkili:", "Yetkili komutlarını gösterir")
    .addField("!sahip:", "Sahiplerin kullanabileceği komutları gösterir")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bütün komutları verir.',
  usage: 'yardım'
};
