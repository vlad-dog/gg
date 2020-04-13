const Discord = require("discord.js");
const RichEmbed = require("discord.js");

  module.exports.run = async (bot, message, args) => {
 
    message.channel.startTyping();
    
    const member = message.member;
    
     if(!message.member.hasPermission(["KICK_MEMBERS","ADMINISTRATOR"])) return message.channel.send("Nu ai access dude");
    
    let kickMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!kickMember) return message.channel.send("Mentioneaza un user")
    
    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send("Pai un motiv bagi si tu?!")
    
    if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Nu am permisiunea de a da kick");
    
    kickMember.send(`Buna , ai luat kick din ${message.guild.name} for: ${reason}`).then(() =>
    kickMember.kick()).catch(err => console.log(err))
    
    message.channel.send(`**${kickMember.user.tag}** a primit kick`).then(m => m.delete(5000))
    
    message.guild.member(kickMember).kick(reason).then(() => message.channel.stopTyping());
    
 /*   let embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "kick")
    .addField("Victima:", kickMember.user.username)
    .addField("Moderatorul:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.creadedAt.toLocaleString())
    
      let sChannel = message.guild.channels.find(c => c.name === "")
      sChannel.send(embed) */
  }
module.exports.help = {
  name:"kick",
  aliases: []
}
