Readme
Readme


![   ](https://github.githubassets.com/images/icons/emoji/unicode/1f916.png)  
## TeamsCBS.G4 
<h1> Node.JS & Discord.JS</h1

1. Install [node.js](https://nodejs.org/en/)
2. Create an application by connecting to  [Developers](https://discord.com/developers/) on  Discord web site .Choose a name,  a picture and eventually a description.

## Creation of discord application

                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

- Obtain the bot invitation link presented in this form:    
>https://discord.com/developers/docs/topics/oauth2#implicit-grant-authorization-url-example)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
with:
-`<CLIENT_ID>` :  Findable in the general  information  page  of the app
-`<PERMISSIONS>` : The number obtained at the bottom of the page in the bot tab by selecting the wanted selections.
 
==> Follow this link and add the bot to one of its servers.
 

-In order for the bot to be able to interact with the server, it will have to be given the right permissions. To facilitate the task we use this  [generator of permissions](https://discordapi.com/permissions.html)  which will allow us to obtain the authorization link

- Create a folder where to save the bot.
- Open the Node.js command prompt console, go to the folder previously created, and install  ` discord.js `                             :
```
> cd <path_to_the_folder>
> npm install discord.js

```

- Create an  `index.js` file and copy the code below:
```
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('TOKEN');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === "!ping") {
    message.channel.send("pong");
  }
});

```


>Replace TOKEN in the above code with the token found in the Bot tab on the app's Discord page.



  ![This number must be kept confidential.](https://github.githubassets.com/images/icons/emoji/unicode/26a0.png)  This number must be kept confidential.

 Start the bot by writing in the console:

```
> node bot.js

```

If all went well, it should show  **Logged** in in the console, and the bot should be connected  into Discord.  Try to send **! Ping** , and bot should answer **pong .** The bot is now configured.
![clap](https://github.githubassets.com/images/icons/emoji/unicode/1f44f.png)

10.  To go further: her are the Discord.js  [documentation](https://discord.js.org/#/docs/main/stable/general/welcome)  and  [guide](https://discordjs.guide/) 


    

    

![earth_africa](https://github.githubassets.com/images/icons/emoji/unicode/1f30d.png)
   

TeamsCBS.G4
Node.JS & Discord.JS
Install node.js
Create an application by connecting to Developers on Discord web site .Choose a name, a picture and eventually a description.
Creation of discord application
Obtain the bot invitation link presented in this form:
https://discord.com/developers/docs/topics/oauth2#implicit-grant-authorization-url-example)

with:
-<CLIENT_ID> : Findable in the general information page of the app
-<PERMISSIONS> : The number obtained at the bottom of the page in the bot tab by selecting the wanted selections.

==> Follow this link and add the bot to one of its servers.

-In order for the bot to be able to interact with the server, it will have to be given the right permissions. To facilitate the task we use this generator of permissions which will allow us to obtain the authorization link

Create a folder where to save the bot.
Open the Node.js command prompt console, go to the folder previously created, and install discord.js :
> cd <path_to_the_folder>
> npm install discord.js

Create an index.js file and copy the code below:
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('TOKEN');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === "!ping") {
    message.channel.send("pong");
  }
});

Replace TOKEN in the above code with the token found in the Bot tab on the app’s Discord page.

This number must be kept confidential. This number must be kept confidential.

Start the bot by writing in the console:

> node bot.js

If all went well, it should show Logged in in the console, and the bot should be connected into Discord. Try to send ! Ping , and bot should answer pong . The bot is now configured.
clap

To go further: her are the Discord.js documentation and guide
earth_africa

Markdown 3853 bytes 308 words 76 lines Ln 76, Col 0HTML 1503 characters 280 words 34 paragraphs
PUBLISH
"Readme" is already published.


Le Coin Raccourcis
Sélectionner une fonctionnalité

Print page
Créer un raccourci
ctrl+alt+n
Vous n'avez ajouté aucun raccourci

Désactiver le coin actif
