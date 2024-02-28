const { Client, Collection, MessageEmbed, MessageAttachment } = require('discord.js');

require('events').EventEmitter.prototype._maxListeners = 100;

const Discord = require('discord.js'); // scaricare nel terminale, facendo *  npm i discord.js@13  * 

const client = new Discord.Client({

    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_VOICE_STATES", ],

    partials: ["MESSAGE", "CHANNEL", "REACTION"],

});

client.login("MTIxMjA1MTUyNTIxNjUxMDAyMw.GnbMKU.t_OS-qgM80kisM5ELGR__WinvvKV6sRu5NFx-M"), //inserire il token





//////////////////////////////////////////ANDRIXCODES DEVELOPMENT™//////////////////////////////////////////////////////////////////





//STATUS

client.on("ready", () => {

    console.log("Bot Online - Mattew :D")

    const statusArray = ['Report Italia']; //Oppure LISTENING, PLAYING



    setInterval(() => {

      const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')

      const status = random[0]

      const mode = random[1]

      client.user.setActivity(status, { type: mode })

    }, 10000)



    //Stato online/offine/non disturbare... (Potrebbe volerci qualche tempo per doversi settare)

    client.user.setStatus('online') //Oppure idle, dnd, invisible

  })


  client.on("message", msg => {
    if (msg.content === "!sito") {
      msg.reply("Il nostro sito è in creazione...");
    }
  })

  client.on("messageCreate", (message) => {
    if (message.content == "!concorsoaperto") {
      var embed = new Discord.MessageEmbed()
        .setTitle(`**🔔 STATO CONCORSI STAFF 🔔**`)
        .setDescription(`**I CONCORSI PER DIVENTARE STAFF SONO UFFICIALMENTE APERTI! ✅

        📫 Concorso Ispector Team:
        Status: Online 🟢
        https://forms.gle/k8g93hUKU2RzRcgh6 

        📫 Concorso Assistance Team: 
        Status: Online 🟢
        https://forms.gle/DX7ZWMyXmqSYKcCj8 

        📫 Concorso Report Team:
        Status: Online 🟢
        https://forms.gle/mFvyuBmHqzwiXejL6  **`)
        .setColor("GREEN")
        
      message.channel.send({ embeds: [embed] })
    }
  })

  

  client.on("messageCreate", (message) => {
    if (message.content == "!concorsochiuso") {
      var embed = new Discord.MessageEmbed()
        .setTitle(`**STATO CONCORSI STAFF**`)
        .setDescription(`**I CONCORSI PER DIVENTARE STAFF SONO UFFICIALMENTE CHIUSI!**`)
        .setColor("RED")
        .setThum

      message.channel.send({ embeds: [embed] })
    }
  }) 

  client.on("messageCreate", (message) => {
    if (message.content == "!comandi") {
      var embed = new Discord.MessageEmbed()
        .setTitle("Comandi Server")
        .setDescription(`**Lista Comandi**

        **!Verifica** | *Mostra questo comando*
        **!Ticket** | *Mostra i ticket*
        **!ip** | *Mostra l'ip del server*
        **!sito** | *Mostra l'indirizzo del sito*
        **!fazione**| *Mostra il modello*
        **!online** | *Mostra il server online*
        **!offline** | *Mostra il server offline
        **!AdminInvito**| *Mostra l'invito*
        **!InfoStreamer**| *mostra il modello*
        **!InfoStreamerPartner**| *mostra il modello*
        **!BandoStreamer**| *mostra il modello*
        **!StreamerPartner**| *mostra il modello*
        **!avatar**| *mostra l'avatar*
        **!bando**| *mostra il modello*
        **!clear**| *sistema cleen*
        **!warn**| *sistema warn*`)
        .setColor("BLUE")

      message.channel.send({ embeds: [embed] })

    }
  })

  