const Discord = require("discord.js");
const RichEmbed = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    message.channel.startTyping();
  
    const member = message.member;
    let sicon = message.guild.iconURL;
    let calculatingembed = new Discord.RichEmbed()
    .setTitle("GAY INFORMATION")
    .setColor("RANDOM")  
    .addField("WAIT",  " CALCULATING..." )
    .setFooter('GAY TEAM', member.user.avatarURL);
    
    let gayembed = new Discord.RichEmbed()
    .setTitle("GAY INFORMATION")
    .setColor("RANDOM")
    .addField("RESULTS", Math.floor(Math.random() * 100 + 1) + " % GAY")
    .setFooter('GAY TEAM', member.user.avatarURL);

    message.channel.send(calculatingembed)
    .then((msg)=> {
    setTimeout(function(){
    msg.edit(gayembed);
  }, 2000), msg.delete(5000).then(() => message.channel.stopTyping());
}); 
    
  
}
  

module.exports.help = {
  name:"gay",
  aliases: []
}
