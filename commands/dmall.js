const Discord = require("discord.js");
const RichEmbed = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const text = args.join(" ");
    if(!text) return message.reply("Write an message please!!!!")
    let msg = message.channel.send("Done ! Now i send DM's.");
    message.delete();
    message.guild.members.forEach(member => {
        if (member.id != bot.user.id && !member.user.bot) member.send(text)
      });
    };

module.exports.help = {
  name:"dmall",
  aliases: []
}