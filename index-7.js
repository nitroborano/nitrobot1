
const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '?'
var token = "process.env.TOKEN"
client.login(token) ;

client.on('ready', function(){
       console.log("Je suis pret pour te servir")
})



client.on('message' ,function(message){
if (message.content.includes(prefix + "destroy")) {
	var embed = new Discord.RichEmbed()
	  .setDescription("\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID\n RAID")            
             message.channel.sendEmbed(embed);
             	} 
})
 
 
  
 	

 
 


   
 client.on('message' ,function(message){
       if(message.content.includes(prefix + 'setstream' )){
 if (message.deletable) message.delete();
 let texte = message.content.split(/ +/).slice(1);
 if(!texte[0]) return;
 client.user.setActivity(`${texte.join(" ")}`, {
 type: "STREAMING",
 url: 'https://www.twitch.tv/hefirox3'
 }).then(() => message.channel.send(` Streaming : \`${texte.join(" ")}\``).then(msg => msg.delete(1)));
            }
 })
 
 
 
 
 
 
 
 
 
 client.on('message' ,function(message){
       if(message.content.includes(prefix + 'photo' )){
       var embed = new Discord.RichEmbed()
.setTitle("Page Photo")
.setDescription("**Ton prefix + `hap` \n \n \n Ton prefix + `issou` \n \n \n Ton prefix + `chiasse`\n \n \n Ton prefix + `bug` \n \n \n Ton prefix + `gr`\n \n \n Ton prefix + `yeah` \n \n \nTon prefix + `calin` \n \n \n Ton prefix + `ez`**")
.setFooter("Dev By Bot")
.setColor ("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/576081563733721088/576669014617489411/download.gif")
message.delete()
message.channel.sendEmbed(embed);
      
      }
})    







    
       client.on('message' ,function(message){
	if(message.content.includes(prefix+ 'hap' )){
		message.delete()
		message.channel.send('https://cdn.discordapp.com/attachments/574131496051408907/574223806181146658/1410279891-rire.gif')
		}
})

client.on('message' ,function(message){
	if(message.content.includes(prefix+ 'issou' )){
		message.delete()
		message.channel.send('https://cdn.discordapp.com/attachments/574131496051408907/574224479107022878/WarmSlipperyIrishwolfhound-max-1mb.gif')
		}
})

 client.on('message' ,function(message){
       if(message.content.includes(prefix + 'fun' )){
       var embed = new Discord.RichEmbed()
.setTitle("**Page Fun**️")
.setDescription("\n \n \n Ton prefix + `pp`\n \n \nTon prefix + `8ball` \n \n \n Ton prefix + `say`**")
.setFooter("Dev By Borano")
.addField("**Profite De Mon Bot**")
.setColor ("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/576081563733721088/576669014617489411/download.gif")
message.delete()
message.channel.sendEmbed(embed); 
      }
})    









client.on('message' ,function(message){
       if(message.content.includes(prefix + 'ddos' )){
       var embed = new Discord.RichEmbed()
.setTitle("**DDOS️**️")
.setDescription("** `//////1% \n //////2% \n//////14%\n //////43%\n //////67% \n //////100% \n User Are DDos` IP 90.89.182.56 PORT 1945**").setImage(client.user.avatarURL) 
.setFooter("Dev By Borano")
.setColor ("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/576081563733721088/576669014617489411/download.gif")
message.delete()
message.channel.sendEmbed(embed); 
      }
})  
  
  
  
  
  
  
  
  
  
client.on('message' ,function(message){
       if(message.content.includes(prefix + 'hack' )){
       var embed = new Discord.RichEmbed()
.setTitle("Page Hack️️")
.setDescription("**Ton prefix + `ddos`** \n \n \n **Ton prefix + `spam`**\n \n \n**Ton prefix + `ip`**")
.setFooter("Dev By Borano")
.addField("Ton prefix + stop pour arretez le bot", "Profite De Mon Bot")
.setColor ("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/576081563733721088/576669014617489411/download.gif")
message.delete()
message.channel.sendEmbed(embed);
      
      }
})    

client.on('message' ,function(message){
       if(message.content.includes(prefix + 'cochon' )){
       var embed = new Discord.RichEmbed()
.setTitle("**Page Cochonnes**️")
.setDescription("**Ton prefix + `nude` \n \n \n Ton prefix + `boobs` **")
.setFooter("Dev By Borano ")
.addField("`Ton prefix + stop pour arretez le bot", "Profite De Mon Bot`")
.setColor ("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/576081563733721088/576669014617489411/download.gif")
message.delete()
message.channel.sendEmbed(embed); 
      }
})    





    
       


client.on('message' ,function(message){
       if(message.content.includes(prefix + 'ip' )){
message.channel.send("https://webresolver.nl/tools/iplogger")
message.delete()
      
      }
})    
client.on('message' ,function(message){
       if(message.content.includes(prefix + 'mp' )){
                var args = message.content.split(" ").slice(1);

                var msge = args.join(' ');

 

                if(!msge) return message.channel.send("Precise un message")

 

                var mpall = new Discord.RichEmbed()
                
                .setColor("RANDOM")

                .addField("Plein de comptes a gagner sur ce serveur ! 🗡", msge);

                message.delete()

                message.guild.members.map(m => m.send(mpall))

            }
   })

client.on('message' ,function(message){
       if(message.content.includes(prefix + 'ez' )){
var embed = new Discord.RichEmbed()
.setImage("https://cdn.discordapp.com/attachments/572372274523668481/575676986253508641/bbcba42024448e2cf99b4ed0426c5d3c.jpg")
message.delete()
message.channel.sendEmbed(embed); 
message.delete()
      }
})     
client.on('message' ,function(message){
       if(message.content.includes(prefix + 'calin' )){
var embed = new Discord.RichEmbed()
.setImage("https://cdn.discordapp.com/attachments/574130527678889994/574633731973840901/DirtyShadyBeagle-small.gif")
message.channel.sendEmbed(embed); 
message.delete()
      }
})     

client.on('message' ,function(message){
       if(message.content.includes(prefix + 'yeah' )){
var embed = new Discord.RichEmbed()
.setImage("https://cdn.discordapp.com/attachments/574246181169790990/574633029549424830/anigif_sub-buzz-11063-1503410786-1.gif")
message.channel.sendEmbed(embed); 
message.delete()
      }
})

     client.on('message' ,function(message){
       if(message.content.includes(prefix + 'bug' )){
       	var embed = new Discord.RichEmbed()
.setImage("https://cdn.discordapp.com/attachments/572372274523668481/574628675811541014/gif-anime.gif")
message.channel.sendEmbed(embed); 
message.delete()
      }
})
client.on('message' ,function(message){
       if(message.content.includes(prefix + 'gr' )){
       	var embed = new Discord.RichEmbed()
       	.setImage("https://cdn.discordapp.com/attachments/574130527678889994/574629882668122119/giphy-1.gif")     
message.channel.sendEmbed(embed); 
message.delete()
      }
})         
client.on('message' ,function(message){
	if(message.content.includes(prefix+ 'nude' )){
	var embed = new Discord.RichEmbed()
	.setImage("https://cdn.discordapp.com/attachments/555162818794749962/571787035799453699/lucy_hale_nude.jpg")
message.channel.sendEmbed(embed); 
message.delete()
      }
})

client.on('message' ,function(message){
	if(message.content.includes(prefix+ 'boobs' )){
		var embed = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/574131496051408907/574243068971188224/www-nude-big-boobs-com-5.jpg")
message.channel.sendEmbed(embed); 
message.delete()
      }
}) 
     
   client.on('message' ,function(message){
	if(message.content.includes(prefix+ 'chiasse' )){
		var embed = new Discord.RichEmbed()
		.setImage("https://cdn.discordapp.com/attachments/572372274523668481/574627387732525056/giphy-downsized-large.gif")
		message.channel.sendEmbed(embed)
		message.delete()
		}
}) 
 client.on('message' ,function(message){
	if(message.content.includes(prefix+ 'pp' )){
		var embed = new Discord.RichEmbed()
		.setImage(client.user.avatarURL)
message.channel.sendEmbed(embed);
message.delete()
}
})

client.on('message' ,function(message){
       if(message.content.includes(prefix + 'say' )){
       	var embed = new Discord.RichEmbed()
                var args = message.content.split(" ").slice(1);

                var msge = args.join(' ')

 
message.react("✔")
                if(!msge) return message.channel.send("Precisse un message")

 

                var embed = new Discord.RichEmbed()

                .setThumbnail(client.user.avatarURL)

                .setTimestamp()

                .setColor("RANDOM")

                .addField("Borano Bot", msge);
message.react(":+1:")
message.channel.sendEmbed(embed);
message.delete()

                 
     }
})
 client.on('message' ,function(message){
       if(message.content.includes(prefix + '8ball' )){
        if (message.deletable) message.delete();
            let arg = message.content.split(/ +/).slice(1);
            if (!arg[0]) return;
            const reponses = ["Oui mon frere", "Non sale trou du cul", "Surement mdr", "Je ne sais pas enculer", "Probablement mec", "Evidemment frere", "Evidemment que non", "Comment peux-tu te poser là question?", "Bien sur", "Effectivement"];
            let embed = new Discord.RichEmbed();
            embed.setAuthor(client.user.username, client.user.avatarURL);
            embed.addField(`Question : ${arg.join(" ")} ?`, `Reponse : **${reponses[Math.floor(Math.random()*reponses.length)]}**`);
            embed.setColor("RANDOM");
            embed.setTimestamp();
            message.channel.send(embed).catch(console.error);
            }
})
