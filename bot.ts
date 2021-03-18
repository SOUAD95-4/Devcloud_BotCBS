//on appel la librerie discord
const Discord = require("discord.js");

//on appel la librerie pour gerer les variables d'environment
//config lira et analisera le fichier .env, et attribuiera à process.env
//des objet avec la cle et son contenu
require("dotenv").config();

//url imfflip API
let meme_image=['ami.jpg','chat_fache.jpg','ministre.png', 'touser.jpg'];

//on cree un objet Client pour interagir avec le bot
var bot = new Discord.Client({});

//l evenement ready, quand le bot est active
bot.on('ready',function(){
    console.log('Bot operationel TS');
});

//l evenement messageDelete declanche quand on effacer un message dans le chanel
bot.on("messageDelete", function(message){
    message.channel.send('arreter de effacer les messages CARAMBA!! TS');
})

// l evenement message est declanché quand qlqun envoye à un message sur le chanel
bot.on("message", async message => {
    console.log(`[Message reçu par ${message.author.tag}]: ${message.content}`)
    //let reponse = message.content; faire une conversion en minuscule, pour faire attention  Salut et salut
    
    if (message.content === "Salut" || message.content === "Hello" ) { // Lorsque "Salut" est envoyé
        //message.channel.send("Salut l'ami !");
        message.reply('Hola!! TS'); 
        //message.react('')
    }else if (message.content === "meme") { 
        //message.author.send('afficher');

        //if(message.member.user.bot) return; //verifie qui soit pas un bot

        let nro = Math.floor(Math.random() * meme_image.length);
        console.log(`./img/${meme_image[nro]}`);
        message.channel.send({files: [`./img/${meme_image[nro]}`]});

    }
});

bot.login(process.env.TOKEN_BOT);

// @On("messageDelete")
  // messageDeleted([message]: ArgsOf<"messageDelete">): void {
  //   console.log(`${message.id}:${message.content} was deleted.`);
  // }

  // @On("guildMemberAdd")
  // memberJoin([member]: ArgsOf<"guildMemberAdd">): void {
  //   console.log(`User : ${member.user.username} has joined the Discord Server.`);
  // }

  // @On("guildCreate")
  // guildJoin([guild]: ArgsOf<"guildCreate">): void {
  //   console.log(`Bot added to the Discord Server : ${guild.name}`);
  // }