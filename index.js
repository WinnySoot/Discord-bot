const { ifError } = require('assert');
const { Console } = require('console');

const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on("ready", () => {
  client.user.setActivity("-help")
})

client.on('message', msg => {
    if (msg.content === '-hey') {
      msg.reply('Hi !');
    }
  });

client.on('message', msg => {
    if (msg.content === '-help') {
      msg.reply('Here is our current commands : -yt , -tw , -sc , -hey . ');
    }
  });

client.on('message', msg => {
    if (msg.content === '-yt') {
      msg.reply('Here is the Youtube Channel of the staff : https://www.youtube.com/channel/UCLhQBDIpaqZm3x-HxdJkWiQ , https://www.youtube.com/channel/UCUlqz6MJit0Th0G1NGU3PiA , https://www.youtube.com/channel/UCCVQOsJviw4FZ2oQyqvQVUA .');
    }
  });

client.on('message', msg => {
    if (msg.content === '-tw') {
      msg.reply('Here is the Twitch Channel of the staff : https://www.twitch.tv/aztaroth333/about , https://www.twitch.tv/winnysoot/about , https://www.twitch.tv/blastgird/about .');
    }
  });




  



