const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warns.json","utf8"));
const file = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  
  message.channel.startTyping();
  
  const member = message.member;
  
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Imi pare rau nu poti da warn");
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!user) return message.reply("Nu l-am gasit vere");
  if(user.hasPermission("MANAGE_MESSAGES")) return message.reply("Nu poti haha");
  let reason = args.join(" ").slice(22);

  if(!warns[user.id]) warns[user.id] = {
  warns: 0
  };
  
  warns[user.id].warns++;
  
  fs.writeFile("../warns.json", JSON.stringify(warns), (err) => {
  if (err) console.log(err); });
  
  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Warned User", `${user}`)
  .addField("Warned In", message.channel)
  .addField("Number of warnings", warns[user.id].warns)
  .addField("Reason", reason);
  
  let warnchannel = message.guild.channels.find('name', "main-chat");
  if(!warnchannel) return message.reply("Nu am gasit canalul pentru warns");
  
  warnchannel.send(warnEmbed);
  
  if(warns[user.id].warns == 1){
    
    let muterole = message.guild.roles.find('name', "Muted");
    if (!muterole) return message.reply("Tre sa ai muted role dude");
    
    let mutetime = "10s";
    await(user.addRole(muterole.id));
    message.channel.send(`${user} a primit mute deoarece are 1 warn.`);
    
    setTimeout(function(){
      user.removeRole(muterole.id)
      message.channel.send(`${user} a primit unmute.`);
      
    }, ms(mutetime))
    
    
  };
  
  if(warns[user.id].warns == 3){
  
   member.kick().then((member) => {
        message.channel.send(`${user} a fost dat afara deoarece are 2 warns.`);
    }).catch(() => {
        if (!message.member.hasPermission(['KICK_MEMBERS', 'ADMINISTRATOR'])) {
            message.reply("Nu o poti face bosule");
        } else if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
            message.reply("YNu o poti face bosule");
        }
    })};
  
  if(warns[user.id].warns == 3){
    
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Diploma de prost acum ti-o desenez? Ca ai nevoie de ea acum.");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Nu o fak sefule");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("B0sule nu ii pot da ban la aceea persoana");

   message.channel.send("O luat ban deoarece are 3 warns.");

    message.guild.member(bUser).ban(bReason).then(() => message.channel.stopTyping());
    
  }
  
}

module.exports.help = {
  name: "warn",
  aliases: []
}