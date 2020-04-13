const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Am o diploma de prost , ti-o sau?");
  
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Nu l-am gasit");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Nu am gasit rolul. Spune un rol");
  let gRole = message.guild.roles.find('name', role);
  if(!gRole) return message.reply("Nu am gasit rolul , app nu trebuie sal mentionezi doar sa-l scrii");
  
  if(rMember.roles.has(gRole.id));
  await(rMember.addRole(gRole.id));
  
  try{
    await rMember.send(`Bravo ai dat rolul ${gRole.name}`)
  }catch (e) {
  
    message.channel.send(`To <@${rMember.id}>, are rolul ${gRole.name}`)
}}

module.exports.help = {
  name:"addrole",
  aliases:[]
}