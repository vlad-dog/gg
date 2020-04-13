const Discord = require("discord.js");
const RichEmbed = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  message.channel.startTyping();
  
  if (message.deletable) {
    message.delete();
  }
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply("Nu poti da delete la mesaje..").then(m => m.delete(5000));
  }
  
  if (isNaN(args[0]) || parseInt(args[0]) <= 0 ) {
    return message.reply("Da...Ce numar? : >clear 9 <= example").then(m => m.delete(5000));
  }
  
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    return message.reply("Scuze... Nu pot sterge mesajele").then(m => m.delete(5000));
  }
 
  let deleteAmount;
  
  if (parseInt(args[0]) > 100) {
    deleteAmount = 0;
  } else {
    deleteAmount = parseInt(args[0]);
  }
  
  message.channel.bulkDelete(deleteAmount, true)
    .then(deleted => message.channel.send(`Am sters \`${deleted.size}\` mesaje.`))
    .catch(err => message.reply(`Ceva a mers gresit.. ${err}`))
    .then(() => message.channel.stopTyping());
}

module.exports.help = {
  name:"clear",
  aliases: []
}
