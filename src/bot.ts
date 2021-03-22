//on appel la librerie discord
const Discord = require("discord.js");

//on appel la librerie pour gerer les variables d'environment
//config lira et analisera le fichier .env, et attribuiera à process.env
//des objet avec la cle et son contenu
require("dotenv").config();

//url imfflip API   : string[]
let meme_image = ['ami.jpg','chat_fache.jpg','ministre.png', 'touser.jpg', 'confinement1.jpg', 'confinement2.jpg', 'confinement3.jpg', 'confinement4.jpg', 'genies.jpg','lundi.jpg'];

//pour creer une commande
const prefix="/"; //on peut reemplacer pour une * ^ /

//on cree un objet Client pour interagir avec le bot
let bot = new Discord.Client({});

//l evenement ready, quand le bot est active
bot.on('ready',function(){
    console.log('Bot operationel TS Nouveau');
});

//l evenement messageDelete declanche quand on effacer un message dans le chanel
// bot.on("messageDelete", function(message){
//     message.channel.send('arreter d\'effacer les messages CARAMBA!! mdr ;-)');
// })

// l evenement message est declanché quand qlqun envoye à un message sur le chanel
//async / await n'est qu'un moyen de gérer les promesses
bot.on("message", async message => {
    console.log(`[Message reçu par ${message.author.tag}]: ${message.content}`)

    //let message_recu = message.content; 
    //toLowerCase: il convertie la chaine message.content en minuscule
    let message_recu = message.content.toLowerCase();

    //if (message.content === "Salut" || message.content === "Hello" || message.content === prefix+"hello" ) { // Lorsque "Salut" est envoyé
    if (message_recu === "salut" || message_recu === "hello" || message_recu === prefix+"hello" ) { // Lorsque "Salut" est envoyé
        //message.channel.send("Salut l'ami !");
        message.reply('Hola!!'); //il ajoute au debut la personne qui a envoyé le message
        //message.react('') //il marche pas, il me faut une librerie emoji
    }else if (message_recu === "meme" || message_recu === prefix+"meme") { 
        //message.author.send('afficher');
        //if(message.member.user.bot) return; // A verifier qui soit pas un bot   
        
        message.channel.send(message.author.username+ ` voici ton meme : `);
        message.channel.send({files: [__dirname+"/../"+ meme_randon()]});
        //message.channel.send('', {files: [__dirName+'/../assets/level.png']});
        //message.reply({files: [`./img/${meme_image[nro]}`]});
    }
});

bot.login(process.env.TOKEN_BOT);

function meme_randon(){
    //Math.floor : il arrondi vers le bas
    let nro = Math.floor(Math.random() * meme_image.length);
    //console.log(`./img/${meme_image[nro]}`);
    return `img/${meme_image[nro]}`;
    //return `../img/${meme_image[nro]}`;
}

// @On("messageDelete")
  // messageDeleted([message]: ArgsOf<"messageDelete">): void {
  //   console.log(`${message.id}:${message.content} was deleted.`);
  // }

/* Pour souhaiter la bienvenue à vos utilisateurs 
        bot.on('guildMemberAdd', member => {
        member.createDM().then(channel => {
            return channel.send('Bienvenue sur mon serveur ' + member.displayName)
        }).catch(console.error)
        // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
    })

    /*************************
    //connecter notre bot à un channel voix et de transmettre divers flux audio. 
    //pour acceder : !play https://www.youtube.com/watch?v=kxnHiFZfLfks
    bot.on('message', message => {

  if (message.content.startsWith('!play')) {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    // On récupère les arguments de la commande 
    // il faudrait utiliser une expression régulière pour valider le lien youtube
    let args = message.content.split(' ')
    // On rejoint le channel audio
    voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }

})
*/

  // @On("guildMemberAdd") //pour souhaiter le bienvenue a vos serveurs
  
  // memberJoin([member]: ArgsOf<"guildMemberAdd">): void {
  //   console.log(`User : ${member.user.username} has joined the Discord Server.`);
  // }

  // @On("guildCreate")
  // guildJoin([guild]: ArgsOf<"guildCreate">): void {
  //   console.log(`Bot added to the Discord Server : ${guild.name}`);
  // }