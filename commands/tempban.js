const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {    

  message.channel.startTyping();

    const command = args.shift().toLowerCase();
    const ms = require("ms");

   module.exports.run = async (bot, message, args) => {
    
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Am o diploma de prost , ti-o dau?");
        var user = message.guild.member(message.mentions.users.first());
        if (!user) return message.channel.send("Ma scuzi , exemplu comenzii complete este : >ban user time")
        var reason = args.join("").slice(22);
        if (!reason) return message.channel.send("reason?");
        var tempBanTime = args[1];

        if (ms(tempBanTime)) {

                 message.guild.member(user).ban(reason);

                message.channel.send(`${user} este banat  ${reason}`).then(() => message.channel.stopTyping());
                
                setTimeout(function () {

                    message.guild.unban(user.id);

                    message.channel.send(`${user} a primit unban`);
                }, ms(tempBanTime));
        } else {
            return message.channel.send(".............")
        }

        }

};

module.exports.help = {
  name:"tempban",
  aliases: []
}