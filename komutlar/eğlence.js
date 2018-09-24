const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:cookie: Kislo Eğlence komutları**")
    .setColor("#15f153")
	.addField("!espiri", "Espiri yapar")
	.addField("!okeyoyna", "Okey oynarsınız")
	.addField("!şifre", "Rastgele bir şifre oluşturur")
	.addField("!öneri", "Bot hakkındaki önerilerinizi bot sahiplerine ulaştırır")
    .addField("!ağla", "Botu ağlatır")
	.addField("!slots", "Slots oyunu oynatır")
	.addField("!stresçarkı", "Sizin için bir stres çarkı çevirir")
	.addField("!emojiyazı", "Mesajınızı emoji haline getirir")
	.addField("!hesapla", "Belirtilen işlemi yapar")


    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eglence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence1 komutlarını verir.',
  usage: 'eğlence'
};
