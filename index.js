const Discord = require("discord.js");
//on appel la librerie pour gerer les variables d'environment
//config lira et analisera le fichier .env, et attribuiera à process.env
//des objet avec la cle et son contenu
require("dotenv").config();



//on cree un objet Client pour interagir avec le bot
var bot = new Discord.Client({
   // partials:["MESSAGE"]
});

//l evenement ready, quand le bot est active
bot.on('ready',function(){
    console.log('Bot operationel');
});

//l evenement messageDelete declanche quand on effacer un message dans le chanel
bot.on("messageDelete", function(message){
    message.author.send('Non non!!');
    message.channel.send('arreter de effacer les messages CARAMBA!!');
})

// l evenement message est declanché quand qlqun envoye à un message sur le chanel
bot.on("message", function (message) {
    if (message.content === "Salut") { // Lorsque "Salut" est envoyé
        message.channel.send("Salut ça va?");
        message.reply('Hola!!'); //envoi à l'autheur
        //message.react('') avec un emoji
    }
});

//
bot.login(process.env.TOKEN_BOT);