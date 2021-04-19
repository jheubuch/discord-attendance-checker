// load environment
require('dotenv').config();

// initialize discord.js
const Discord = require('discord.js');
const client = new Discord.Client();

// handler for messages
client.on('message', (msg) => {
    // do not react to message if author is bot, message does not start with prefix or the author has not the specified role
    if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot)
        return;
    if (!msg.member.roles.cache.some(role => role.name.includes(process.env.ROLE)))
        return;
    
    // parse the requested channel from the message
    let attendanceChannel = msg.content.split(' ')[1];
    if (attendanceChannel === null || attendanceChannel === undefined || attendanceChannel === '') {
        msg.channel.send('Please specify a voice channel I should check the attendance on. 😊');
        return;
    }

    // find the specified voice channel
    let channel = client.channels.cache.find(channel => channel.type === 'voice' && channel.name === attendanceChannel);
    if (channel === null || channel === undefined) {
        msg.channel.send('I could not find the channel you were looking for... 😕 Please try again!');
        return;
    }

    // build the message depending on how many persons are in the channel
    let attendanceMessage;
    if (channel.members.size !== 0) {
        attendanceMessage = `I found the following participants attending in ${channel}: \n\n`;
        channel.members.each(member => attendanceMessage += `${member.nickname}\n`);
    } else {
        attendanceMessage = `There are no attendees in ${channel} at the moment 🤨`;
    }

    // send the message
    msg.channel.send(attendanceMessage);
});

// log in to Discord API
client.login(process.env.BOT_TOKEN);