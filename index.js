const Discord = require('discord.js-selfbot-v13');
const dotenv = require('dotenv');

dotenv.config();

const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('872887640205193286')
    .setType('PLAYING')
    .setURL('https://www.youtube.com/watch?v=XqqwGWC97RI') //Must be a youtube video link 
    .setState('i need robux')
    .setName('Roblox')
    .setDetails('Brookhaven 🏡RP')
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1223470107104251916/1272599831126474792/qLxW0CX.gif?ex=66d69733&is=66d545b3&hm=f247e8e4f239172d61b3148f713fd2c9af4d9c5295c828cc2d9652a63a313734&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('nig*a playing roblox') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1280089998154006599.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Roblox') //Text when you hover the Small image
    .addButton('Play Roblox', 'https://www.youtube.com/watch?v=WL4Dbxn4CoA')
    .addButton('Oof', 'https://www.youtube.com/watch?v=xYJ63OTMDL4');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Roblox`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

client.login(process.env.TOKEN);
