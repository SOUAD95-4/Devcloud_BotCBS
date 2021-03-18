---


---

<p>! [] ( <a href="https://github.githubassets.com/images/icons/emoji/unicode/1f916.png">https://github.githubassets.com/images/icons/emoji/unicode/1f916.png</a> )</p>
<h2 id="teamscbs.g4">TeamsCBS.G4</h2>
<p>&lt; h1 &gt; Node.JS et Discord.JS &lt;/ h1</p>
<ol>
<li>installez [node.js] ( <a href="https://nodejs.org/en/">https://nodejs.org/en/</a>) 2. Créez une application en vous connectant à [Developers] ( <a href="https://discord.com/developers/">https://discord.com/developers/</a>) sur le site Web de Discord . nom, une image et une description.</li>
</ol>
<h2 id="création-de-lapplication-discord">Création de l’application discord</h2>
<ul>
<li>Obtenez le lien d’invitation du bot présenté sous ce formulaire:</li>
</ul>
<blockquote>
<p><a href="https://discord.com/developers/docs/topics/oauth2#implicit-grant-authorization-url-example">https://discord.com/developers/docs/topics/oauth2#implicit-grant-authorization-url-example</a>)</p>
</blockquote>
<p>avec: - <code>&lt;CLIENT_ID&gt;</code> : Retrouvable dans la page d’informations générales de l’application - <code>&lt;PERMISSIONS&gt;</code> : Le numéro obtenu en bas de page dans l’onglet bot en sélectionnant les sélections souhaitées.</p>
<p>==&gt; Suivez ce lien et ajoutez le bot à l’un de ses serveurs.</p>
<p>-Pour que le bot puisse interagir avec le serveur, il devra disposer des bonnes autorisations. Pour faciliter la tâche nous utilisons ce [générateur d’autorisations] ( <a href="https://discordapi.com/permissions.html">https://discordapi.com/permissions.html</a>)                                                                                                 qui nous souhaitons obtenir le lien d’autorisation</p>
<ul>
<li>Créer un dossier dans lequel enregistrer le bot. - OUVREZ la commande de la console Node.js invitent, le dossier et créé Dans Aller à Installateur précédemment                                                                                                 <code>discord.js</code>                                                                                                                            :</li>
</ul>
<p><code></code> <code></code></p>
<blockquote>
<p>Cd &lt;chemin_vers_le_dossier&gt;&gt; Discord.js du programme d’installation de NPM <code></code> <code></code></p>
</blockquote>
<ul>
<li>Créer un                   <code>index.js</code> fichier et le code de ci copiez - dessous: <code></code> <code></code> const = Discorde require ( ‘discord.js’); client const = nouveau Discord.Client (); client.login (‘JETON’); client.on (‘ready’, () =&gt; {console.log ( <code>Connecté en tant que $ {client.user.tag}!</code> );}); client.on (‘message’, message =&gt; {if (message.content === “! ping”) {message.channel.send (“pong”);}}); ‘’</li>
</ul>
<blockquote>
<p>Remplacez TOKEN dans le code ci-dessus par le jeton trouvé dans l’onglet Bot sur la page Discord de l’application.</p>
</blockquote>
<p>! [Ce numéro doit rester confidentiel.] ( <a href="Https://github.githubassets.com/images/icons/emoji/unicode/26a0.png">Https://github.githubassets.com/images/icons/emoji/unicode/26a0.png</a> )  Ce numéro doit rester confidentiel.</p>
<ul>
<li>Démarrez le bot en écrivant dans la console:</li>
</ul>
<pre><code>&gt; node bot.js

</code></pre>
<p>If all went well, it should show  <strong>Logged</strong> in in the console, and the bot should be connected  into Discord.  Try to send <strong>! Ping</strong> , and bot should answer <strong>pong .</strong> The bot is now configured.<br>
<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f44f.png" alt="clap"></p>
<ul>
<li>To go further: her are the Discord.js  <a href="https://discord.js.org/#/docs/main/stable/general/welcome">documentation</a>  and  <a href="https://discordjs.guide/">guide</a></li>
</ul>
<h2 id="httpsgithub.comromain-roytuto-bot-discordblobmasterreadme.mdhébergement-hébergement">[] (<a href="https://github.com/romain-roy/tuto-bot-discord/blob/master/README.md#h%C3%A9bergement">https://github.com/romain-roy/tuto-bot-discord/blob/master/README.md#hébergement</a>) Hébergement</h2>
<p>Le bot est maintenant hébergé en ligne, il est accessible depuis n’importe où et à n’importe quel moment! ! [earth_africa] ( <a href="https://github.githubassets.com/images/icons/emoji/unicode/1f30d.png">https://github.githubassets.com/images/icons/emoji/unicode/1f30d.png</a> )</p>

