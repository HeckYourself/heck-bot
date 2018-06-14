const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDU2ODQ1OTgzNzMzNTE0MjU2.DgQmxQ.t8AD2dVhI95jDG6hcz_FNQKC4GM);
