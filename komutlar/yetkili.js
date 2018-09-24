const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:tools: Kislo Yetkili komutları**")
    .setColor("#11cddb")
	.addField("!eval", "Kod denemek için kullanılır")
    .addField("!duyuru", "Duyuru yapar")
	.addField("!reboot", "Botu yeniden başlatır")
	.addField("!kilit", "Kanalı istediğiniz kadar süreyle kitler")
    .addField("!temizle", "Belirttiğiniz mesaj kadar sayı siler")
    .addField("!kick", "İstediğiniz bir kişiyi atarsınız")
    .addField("!ban", "İstediğiniz bir kişiyi yasaklarsınız")
	.addField("!unban", "İstediğiniz kişinin banını kaldırır")
	.addField("!sustur", "İstediğiniz kişiyi  susturur.Dikkat! mod-log kanalına,Susturulmuş adlı perme ihtiyacınız var bu komut için")
	.addField("!ban", "İstediğiniz bir kişiyi yasaklarsınız")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetki'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Bütün yetkili komutlarını verir.',
  usage: 'yetkili'
};
