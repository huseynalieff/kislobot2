const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:spy: Kullanıcı komutları**")
    .setColor("#b6dd1a")
    .addField("!kullanıcıbilgim", "Komutu kullanan kişi hakkında bilgi verir")
    .addField("!botbilgi", "Bot hakkında bilgi verir")
    .addField("!sunucubilgi", "Sunucu hakkında bilgi verir")
    .addField("!davet", "Botun davet linkini gönderir")
	.addField("!servericon", "Serverin iconunu gösterir")
	.addField("!istatistik", "Botun istatistik gösterir")
	.addField("!kislo", "Kislo hakkında bilgi verir")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bütün kullanıcı komutlarını verir.',
  usage: 'kullanıcı'
};
