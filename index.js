const Discord = require('discord.js-selfbot-v13');
const dotenv = require('dotenv');

dotenv.config();

const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1204154123025387573')//
    .setType('PLAYING')//
    .setURL('https://www.youtube.com/watch?v=XqqwGWC97RI') //
    .setState('i need robux')//
    .setName('Roblox')//
    .setDetails(`Brookhaven 🏡RP`)//
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1223470107104251916/1272599831126474792/qLxW0CX.gif?ex=66d69733&is=66d545b3&hm=f247e8e4f239172d61b3148f713fd2c9af4d9c5295c828cc2d9652a63a313734&') // Large Image 
    .setAssetsLargeText('nig*a playing roblox') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1280089998154006599.gif') // Small image
    .setAssetsSmallText('Roblox') //Text when you hover the Small image
    .addButton('Play Roblox', 'https://www.youtube.com/watch?v=WL4Dbxn4CoA')
    .addButton('Oof', 'https://www.youtube.com/watch?v=xYJ63OTMDL4');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
// Update every second
});

client.login(process.env.TOKEN);
