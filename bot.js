const Discord = require('discord.js'); 
const client = new Discord.Client(); 

client.on('ready', () => {
  console.log("Bot is Ready")

  client.user.setActivity('tempestmc.net',{type: "PLAYING"})

});

client.on('message', msg => {
  if (msg.content === '-apply') {
    msg.reply('CHECK YOUR DM :mailbox: :white_check_mark: ');
  }
}); 


client.on("message", message => {
  if(message.content.startsWith("-apply")) {
if(!message.channel.guild) return;
      if(message.author.bot) return;
let channel = message.guild.channels.find("name", "applications")
  if(!channel) return message.reply("**cant find the room**")
  if(channel) {
  message.author.send( message.member + ', **:timer:**').then( (m) =>{
    m.edit( message.member + ', **1. What is your ign? **' )
    m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
        m1 = m1.first();
        var name = m1.content;
        m1.delete();
        m.edit(message.member + ', **:timer:**').then( (m) =>{
            m.edit( message.member + ', **2. How old are you? **' )
            setTimeout(() => {
              m.delete()
            }, 10000);
            m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                m2 = m2.first();
                var age = m2.content;
                m2.delete()
                message.author.send( message.member + ', **:timer:**').then( (m) =>{
                  m.edit( message.member + ', **3. What timezone do you live in? (NA/EU/AU)**' )
                  setTimeout(() => {
                    m.delete()
                  }, 10000);
                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                      m3 = m3.first();
                      var ask = m3.content;
                      m3.delete();
                      message.author.send( message.member + ', **:timer:**').then( (m) =>{
                        m.edit( message.member + ', **4. Do you have history in Skyblock and how many hours can you play per week? **' )
                        setTimeout(() => {
                          m.delete()
                        }, 10000);
                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                            m4 = m4.first();
                            var ask2 = m4.content;
                            m4.delete();
                            message.author.send( message.member + ', **:timer:**').then( (m) =>{
                              m.edit( message.member + ', **5. Do you have schematica and know how to use it? **' )
                              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                  m5 = m5.first();
                                  var ask3 = m5.content;
                                  m5.delete();
            m.edit(message.member + ', **A Owner will review your application shortly!** :smiley: ').then( (mtime)=>{
              setTimeout(() => {
                let embed = new Discord.RichEmbed()
              .setColor('RANDOM')
              .setTitle(`**THE LIST** [__**${message.guild.name}**__]`)
              .addField('**`What is your ign?`**', `${name}` , true)
              .addField('**`How old are you?`**', `${age}` , true)
              .addField('**`What timezone do you live in? (NA/EU/AU)`**',`${ask}`)
              .addField('**`Do you have history in Skyblock and how many hours can you play per week?`**',`${ask2}`)
              .addField('**`Do you have schematica and know how to use it?`**',`${ask3}`)
              .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
              channel.send(embed)
              }, 2500);
              setTimeout(() => {
                mtime.delete()
              }, 3000);

        })
      })
      })
    })
  })
})
})
})
    })
})
})
}
}
});

var prefix = "-"
client.on('message', message => {
  if (message.author.xErenaa) return;
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
  /*let bErenaalog = client.channels.find("name", "Erenaa-log");
 
  if(!bErenaalog) return message.reply("I've detected that this server doesn't have a Erenaa-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**TAG SOMEONE**");
  if(!reason) return message.reply ("**REASON OF BAN**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**i cant BAN THIS PERSON**");
 
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

client.on('message', message => {
  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  if(!message.content.toLowerCase().startsWith(prefix)) return;
  if(command == "announcement") {
    if(!args.join(" ")) return message.channel.send(`**you must write announcement **`);
    let channel = message.guild.channels.find(c => c.name == "announcement");
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle(`𝘼𝙉𝙉𝙊𝙐𝙉𝘾𝙀𝙈𝙀𝙉𝙏`)
    .setDescription(args.join(" "));
    channel.send(embed).then(msg => {
      msg.channel.send(`@everyone|@here `);
      message.delete()
      message.channel.send(`**DONE!!the announcement was sent to Channel announcements :white_check_mark:  **`);
    });
  }
});

client.on('guildMemberAdd', member => {
  var embed = new Discord.RichEmbed()
  .setThumbnail(member.user.avatarURL)
.addField("***Welcome*** to TBS Skyblock Team Discord" ,member.user.username)
  .setDescription('')
  .setColor('RANDOM')
  .setImage('')
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});

client.on('message', message => {
  if (message.content === ('-bot')) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('**Servers**📚 :', [client.guilds.size], true)
          .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
          .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
          .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
          .addField('**Bot Owner**👑 :' , `[<@366277319884537867>]` , true)
          .setFooter(message.author.username, message.author.avatarURL)
  })
}
});

client.on('message', message => {
  if(!message.channel.guild) return;
if (message.content.startsWith('-ping')) {
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
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
    
   message.channel.send('**:white_check_mark: DONE!! check private   **');
   const embed = new Discord.RichEmbed() 
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`**
  :rose:  [❖═════ 𝙂𝙚𝙣𝙚𝙧𝙖𝙡 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 ═══════❖] :rose: 
-ping :arrow_right: to make announcement
-apply :arrow_right:  to apply for the team 
-bot :arrow_right: Bot information
 **`);

message.author.sendEmbed(embed)
  }
});

client.login(process.env.BOT_TOKEN);