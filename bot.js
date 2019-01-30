const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "."
const adminprefix = "+"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`HooliGansᵀᵉᵃᵐ`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
  if (message.content.startsWith(".invite")) {

message.channel.createInvite({
      thing: true,
      maxUses: 1,
      maxAge: 86400
  }).then(invite =>
    message.author.sendMessage(invite.url)
  )
message.channel.send("**CHECK YOUR PRIVET**")

message.author.send(`** TIME FOR THE LINK: 1DAY
**`)


  }
});


 
client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
    
   message.channel.send('**:white_check_mark: DONE!! check private   **');
   const embed = new Discord.RichEmbed() 
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`**
  -🚀 low ping
  -😎 easy to use 
  -⚠ worked 24/24
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
  💎『public commands』💎
                          
  💎.server  『INFO FOR THE SERVER』                     
  💎.avatar  『avatar profile』
  💎.ping 『bot ping』
  💎.mb 『info for members』
  💎.report 『to report someone 』
  💎.invite 『TO GET SERVER INVITE LINK 』
  💎.clear 『CLEAR CHAT』
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
  👑『ADMINS ROLE』👑
  👑.ban 『ban member』
  👑.kick 『kick member』
  👑.clear 『clear the chat』
  👑.vote 『FOR VOTE』
  👑.bc  『MAKE BROADCAST FOR THE SERVER』
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
  💎『BOT CREATER』💎
  HooliGansᵀᵉᵃᵐ
  FALLEGA TEAM ᴳᴬᴹᴵᴺᴳ
  𝓕𝟒𝓡𝓔𝓢_𝓢𝓐𝓝𝓚𝓞𝓤𝟕#2840
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
 **`);

message.author.sendEmbed(embed)
  }
});

client.on("message", message => {
          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "clear")) {
if (!args[1]) {
                              let x5bz1 = new Discord.RichEmbed()
                              .setDescription(".clear <number>")
                              .setColor("#0000FF")
                              message.channel.sendEmbed(x5bz1);
                          } else {
                          let messagecount = parseInt(args[1]);
                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                          let x5bz2 = new Discord.RichEmbed()
                                                          .setColor("#008000")
                              .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                      message.delete("..");
                              message.channel.sendEmbed(x5bz2);
                          }
                        }
});

client.on('message', message => {
  if (message.content.startsWith(".avatar")) {
      var mentionned = message.mentions.users.first();
  var x5bzm;
    if(mentionned){
        var x5bzm = mentionned;
    } else {
        var x5bzm = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage(`${x5bzm.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});

client.on('message', message => {
  if(!message.channel.guild) return;
if (message.content.startsWith('.ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});



client.on('message', message => {
  if (message.content === ".server") {
  if(!message.channel.guild) return;
  const millis = new Date().getTime() - message.guild.createdAt.getTime();
  const now = new Date();
  
  const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
  const days = millis / 1000 / 60 / 60 / 24;
  let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
  var embed  = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .addField("**🆔 SERVER ID**", "**"+message.guild.id+"**",true)
  .addField("**👑 SERVER OWNER**", "**"+message.guild.owner+"**" ,true)
  .addField('**💬 TEXT CHANNELS**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
  .addField("**📣 VOICE CHANNELS**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
  .addField("**🤔 HOW MANY DAYS CRAETED THIS SERVER**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
  .addField("**👔 ROLES**",`**[${message.guild.roles.size}]** Role `,true)
  .addField("**💠 SECUIRITE SERVER**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)
  
  .addField("👥MERMBERS COUNT",`
  **${message.guild.memberCount}**`)
  .setThumbnail(message.guild.iconURL)
  .setColor('RANDOM')
  message.channel.sendEmbed(embed)
  
  }
});
 
client.on('message', message => {
  if(message.author.bot) return;
  var name1 = message.mentions.users.first();
  var reason = message.content.split(' ').slice(2).join(' ');
  if(message.content.startsWith(prefix + 'report')) {
      if(message.author.bot) return;
      if(!message.guild.channels.find('name', 'report')) return message.channel.send('**Must be there room with report name**').then(msg => msg.delete(5000));
  if(!name1) return message.reply('**:innocent:TAG:innocent:**').then(msg => msg.delete(3000))
      message.delete();
  if(!reason) return message.reply('**:innocent:THE REASON ?:innocent:**').then(msg => msg.delete(3000))
      message.delete();
  var abod = new Discord.RichEmbed()
  .setTitle(`NAME THE REPORTER: ${message.author.tag}`)
  .addField('**name the reported:**', `${name1}`, true)
  .addField('**room channel name:**', `${message.channel.name}`, true)
  .addField('**reason:**', `${reason}`, true)
  .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
  .setTimestamp()
      message.guild.channels.find('name', 'report').sendEmbed(abod)
  message.reply('**:sunglasses:WE WILL READ YOUR REPORT SOON:sunglasses:**').then(msg => msg.delete(3000));
  }
});

client.on('guildCreate', guild => {
var embed = new Discord.RichEmbed()
.setColor(0x5500ff)
.setDescription(`**THANKS FOR ADDING BOT HooliGansᵀᵉᵃᵐ**`)
    guild.owner.send(embed)
});

client.on('message', message => {

  if (message.author.bot) return;
 if (!message.channel.guild) return;
 if (message.content.startsWith(prefix + 'mb')) {
     if (!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setThumbnail(message.author.avatarURL)
         .setFooter(message.author.username, message.author.avatarURL)

     .setDescription(`**:battery: MEMBER STATS**
 
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

     message.channel.send()

     message.channel.sendEmbed(embed)
 }
});


client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', '💎𝕎elcome💎');
  let memberavatar = member.user.avatarURL
    if (!channel) return;
  let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('•🔰|Name» ',`${member}`)
      .addField('•🌹|Welcome » ' , `Welcome to HooliGansᵀᵉᵃᵐ :tada::hugging: !, ${member}`)
      .addField('•🆔| User ID » ', "**[" + `${member.id}` + "]**" )
              .addField('➡| YOU ARE NUMBER',`${member.guild.memberCount}`)                     
                                   .addField('•🔮|Server Name » ', `${member.guild.name}`,true)
  .addField('•🕣|Time Create » ', member.user.createdAt.toLocaleString(), true)

                                     
   .setFooter("|•♥•| HooliGansᵀᵉᵃᵐ |•♥•|")
      .setTimestamp()
 
    channel.sendEmbed(embed);
});


client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**TAG SOMEONE**");
  if(!reason) return message.reply ("**REASON FOR THE KICK**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I CANT KICK SOMEONE HIGHER ROLE THAN ME**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**TAG SOMEONE**");
  if(!reason) return message.reply ("**REASON FOR THE BAN**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I CANT BAN SOMEONE HIGHER ROLE THAN ME**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});



client.on('guildMemberRemove', member => {
  var embed = new Discord.RichEmbed()
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle(`HAVE A NICE DAY ✋:skin-tone-1: 😔`)
  .setDescription(`Good bye ✋:skin-tone-1: 😔 `)
  .addField('THEY STILL IN SERVER :',`**[ ${member.guild.memberCount} ]**`,true)
  .setColor('RED')
  .setFooter(`==== (っ◔◡◔)っ ♥ 𝐇𝐎𝐏𝐄 𝐘𝐎𝐔 𝐄𝐍𝐉𝐎𝐘 ♥ ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')

var channel =member.guild.channels.find('name', '💎𝕎elcome💎')
if (!channel) return;
channel.send({embed : embed});
})



client.on('message', message => {
  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  if(!message.content.toLowerCase().startsWith(prefix)) return;
  if(command == "vote") {
    if(!args.join(" ")) return message.channel.send(`**WRITE THE SUGGESTIONS **`);
    let channel = message.guild.channels.find(c => c.name == "vote");
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle(``)
    .setFooter(`Select a reaction below to vote on suggestion`)
    .setDescription(args.join(" "));
    channel.send(embed).then(msg => {
      msg.react("✅").then(() => msg.react("❌"));
      message.delete()
      message.channel.send(`**YOU MUST WRITE THE SUGGESTION TO SEND IT THE THE CHANNEL**`);
    });
  }
});

client.on('message',async message => {
  if(message.author.bot || message.channel.type === '.bc') return;
  let args = message.content.split(' ');
  if(args[0] === `.bc`) {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **YOU DONT HAVE PERMESSION**');
    if(!args[1]) return message.channel.send('. **YOU MUST WRITE THE MESSAGE AFTER THE COMMAND**');
 
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・NUMBER OF MESSAGES**\n**- [ :inbox_tray: :: ${successCount} ] ・HOW MANY MEMBER SENDING**\n**- [ :outbox_tray: :: ${errorCount} ]・MESSAGE NOT SEND**`).then(msg => {
      message.guild.members.forEach(g => {
        g.send(args.slice(1).join(' ')).then(() => {
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・NUMBER OF MESSAGES**\n**- [ :inbox_tray: :: ${successCount} ] ・HOW MANY MEMBER SENDING**\n**- [ :outbox_tray: :: ${errorCount} ]・MESSAGE NOT SEND**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・NUMBER OF MESSAGES**\n**- [ :inbox_tray: :: ${successCount} ] ・HOW MANY MEMBER SENDING**\n**- [ :outbox_tray: :: ${errorCount} ]・MESSAGE NOT SEND**`);
        });
      });
    });
  }
});



client.login(process.env.BOT_TOKEN);
