---


---

<p><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f916.png" alt="   "></p>
<h2 id="teamscbs.g4">TeamsCBS.G4</h2>
<h1> Node.JS &amp; Discord.JS</h1><ol>
<li>Install <a href="https://nodejs.org/en/">node.js</a></li>
<li>Create an application by connecting to  <a href="https://discord.com/developers/">Developers</a> on  Discord web site .Choose a name,  a picture and eventually a description.</li>
</ol>
<h2 id="creation-of-discord-application">Creation of discord application</h2>
<ul>
<li>Obtain the bot invitation link presented in this form:</li>
</ul>
<blockquote>
<p><a href="https://discord.com/developers/docs/topics/oauth2#implicit-grant-authorization-url-example">https://discord.com/developers/docs/topics/oauth2#implicit-grant-authorization-url-example</a>)</p>
</blockquote>
<p>with:<br>
-<code>&lt;CLIENT_ID&gt;</code> :  Findable in the general  information  page  of the app<br>
-<code>&lt;PERMISSIONS&gt;</code> : The number obtained at the bottom of the page in the bot tab by selecting the wanted selections.</p>
<p>==&gt; Follow this link and add the bot to one of its servers.</p>
<p>-In order for the bot to be able to interact with the server, it will have to be given the right permissions. To facilitate the task we use this  <a href="https://discordapi.com/permissions.html">generator of permissions</a>  which will allow us to obtain the authorization link</p>
<ul>
<li>Create a folder where to save the bot.</li>
<li>Open the Node.js command prompt console, go to the folder previously created, and install  <code>discord.js</code>                             :</li>
</ul>
<pre><code>&gt; cd &lt;path_to_the_folder&gt;
&gt; npm install discord.js

</code></pre>
<ul>
<li>Create an  <code>index.js</code> file and copy the code below:</li>
</ul>
<pre><code>const Discord = require('discord.js');
const client = new Discord.Client();
client.login('TOKEN');

client.on('ready', () =&gt; {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message =&gt; {
  if (message.content === "!ping") {
    message.channel.send("pong");
  }
});

</code></pre>
<blockquote>
<p>Replace TOKEN in the above code with the token found in the Bot tab on the app’s Discord page.</p>
</blockquote>
<p><img src="https://github.githubassets.com/images/icons/emoji/unicode/26a0.png" alt="This number must be kept confidential.">  This number must be kept confidential.</p>
<p>Start the bot by writing in the console:</p>
<pre><code>&gt; node bot.js

</code></pre>
<p>If all went well, it should show  <strong>Logged</strong> in in the console, and the bot should be connected  into Discord.  Try to send <strong>! Ping</strong> , and bot should answer <strong>pong .</strong> The bot is now configured.<br>
<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f44f.png" alt="clap"></p>
<ol start="10">
<li>To go further: her are the Discord.js  <a href="https://discord.js.org/#/docs/main/stable/general/welcome">documentation</a>  and  <a href="https://discordjs.guide/">guide</a></li>
</ol>
<p><img src="https://github.githubassets.com/images/icons/emoji/unicode/1f30d.png" alt="earth_africa"></p>

