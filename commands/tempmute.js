const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  message.channel.startTyping();
  
  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("nu l-am gasit.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("nu ii pot da mute, klar bosule");
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("spune mane cat timp (1m/1h/1s/1d)");

  await(tomute.addRole(muterole.id));
  message.reply(`i-a luat dreptul lui <@${tomute.id}> pentru a vorbi timp de ${ms(ms(mutetime))}`).then(() => message.channel.stopTyping());

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> a primit unmute!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "mute",
  aliases: []
}
