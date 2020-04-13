const Discord = require("discord.js");
const RichEmbed = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  message.channel.startTyping();
  
  const member = message.member;
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle('HELP')
    .setColor("RANDOM")
    .setURL('https://discord.gg/CX3Juj')
    .setThumbnail(sicon)
    .addField("**MODERATION** -------->", "----------------")
    .addField("__BAN__", "Da ban unei persoane: >ban @Danut e bravo")
    .addField("__TEMPBAN__", "Da ban temporar unei persoane: >ban @Danut 2m")
    .addField("__KICK__", "Da kick unei persoane: >kick @Danut e bravo ")
    .addField("__TEMPMUTE__", "Da mute temporar unei persoane: >tempmute @Danut 2m Danut e bravo")
    .addField("__CLEAR__", "Sterge mesajele unui canal: >clear 20")
    .addField("__ADDROLE__", "Adauga un rol unei persoane")
    .addField("__REMOVEROLE__", "Sterge un rol de la o persoana")
    .addField("**FUNNY** --------->", "----------------" )
    .addField("__GAY__", "Arata cat de gay este o persoana : >gay @Danut")
    .addField("__MEME__", "Trimite un meme : >meme")
    .addField("__INSTAGRAM__","Iti arata profilul unui cont de instagram" )
    .addField("**MUSIC** --------->", "----------------")
    .addField("__PLAY__", "Porneste o melodie")
    .addField("__SKIP__", "Da skip unei melodii")
    .addField("__STOP__", "Opreste melodia")
    .addField("__PAUSE__", "Pune pauza melodiei")
    .addField("__RESUME__", "Dupa ce dai pauza , cu ajutorul acestei comenzi dai resume la melodie")
    .addField("__QUEUE__", "Iti arata playlistu facut de tine sau ed alta persoana")
    .addField("**INFO** -------->","----------------" )
    .addField("__Bot info__", "Pentru setarea Server Stats si Welcome message dm Munteanu#1111")
    .addField("__CREATOR__", "Munteanu#1111")
    .setFooter('@MUNTEANU BOTS', member.user.avatarURL);
  
          message.channel.send(serverembed).then(() => message.channel.stopTyping());
  
}


module.exports.help = {
  name:"help",
  aliases: []
}