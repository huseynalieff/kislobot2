const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:cookie: Kislo Eğlence2 komutları**")
    .setColor("#15f153")
	.addField("!yaz", "İstediğiniz şeyi bota yazdırır")
	.addField("!yazıtura", "Yazı-Tura atar.")
	.addField("!istatistik", "Botun istatistik gösterir")
	.addField("!hesapla", "Belirtilen işlemi yapar")
	.addField("!havadurumu", "Hava durumunu gösterir.")
	.addField("!8ball", "Sihirli 8ball sorularınızı cevaplar")
	.addField("!avatar", "Avatarınızı gösterir")
	.addField("!coolresim", "Coolresim gösterir")
    .addField("!koş", "Koşarsınız")
    .addField("!pitbull", "Pitbulldan kaçarısınız")
    .addField("!token", "Bot tokenini verir")
    .addField("!çay", "Size çay demler :)")
	.addField("!çayiç", "Çay içersiniz")
    .addField("!çayaşekerat", "Çayınıza şeker atarsınız")
    .addField("!kahveiç", "Kahve içersiniz")
    .addField("!kafasalla", "Kafa sallarsınız")
    .addField("!okeyoyna", "Arkadaşlarınızla, doyasıya Okey oynarsınız")
    .addField("!pcaç", "Bilgisayarınızı açarsınız")
    .addField("!tekmeat", "Botu tekmelersiniz")
    .addField("!tokatat", "Bota tokat atarsınız")
    .addField("!yumrukat", "Bota yumruk atarsınız")


    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eglence2'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence2',
  description: 'Bütün eğlence komutlarını verir.',
  usage: 'eğlence2'
};
