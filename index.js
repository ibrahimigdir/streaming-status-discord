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
 .setAssetsLargeImage('https://i.ibb.co/LRnL6sH/T8-VEzpg-3.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('nig*a playing roblox') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1223470107104251916/1272599830811775106/T8VEzpg.gif?ex=66bb9073&is=66ba3ef3&hm=85ba774dcf941e0f9e31014dd8d255542425f88a337412582b719f73bde77028&') //You can put links in tenor or discord and etc.
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
