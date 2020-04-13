const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  message.channel.startTyping();
  
  let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Informatii despre acest server")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nume la server", message.guild.name)
    .addField("Creeat pe data de", message.guild.createdAt)
    .addField("Ai intrat pe data de", message.member.joinedAt)
    .addField("Membrii totali", message.guild.memberCount);

    message.channel.send(serverembed).then(() => message.channel.stopTyping());
}

module.exports.help = {
  name:"serverinfo",
  aliases: []
}