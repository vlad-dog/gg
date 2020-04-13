const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
    message.channel.startTyping();
  
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Diploma de prost acum ti-o desenez? Ca ai nevoie de ea acum.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Nu o fak sefule");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("B0sule nu ii pot da ban la aceea persoana");

   message.channel.send("O luat ban , direct reckt pentru el.");

    message.guild.member(bUser).ban(bReason).then(() => message.channel.stopTyping());
}

module.exports.help = {
  name:"ban",
  aliases: []
  
}
