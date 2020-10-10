const Discord = require("discord.js");
var logger = require('winston');
const auth = require(`../auth.json`)
const botInfo = require(`../info.json`);
const botTools = require('../custom-modules/tools')
var uptimerobot = require('uptime-robot');
var cl = new uptimerobot(auth["uptimerobot-key"]);

// Find the very cool monitor.
function findMonitor(monitors, lookID) {
  var a = null;
  for (var i = 0; i < monitors.length; i++) {
    if (monitors[i].id == lookID) {
      var a = monitors[i]
      return a;
    }
  }
}

// Color to use for our embed message.
function embedColor(arg) {
  var a = null;
  // Switch statements are cool!
  switch(arg) {
    case `9`:
      a = 0xFF0000;
    break;
    case `2`:
      a = 0x00FF00;
    break;
    case `0`:
      a = 0x000000;
    break;
  }
  return a;
}

// Get a cool emoji to use in our embed message.
function emojiMsg(arg) {
  var a = null;
  switch(arg) {
    case `9`:
      a = ":red_circle:";
    break;
    case `2`:
      a = ":green_circle:";
    break;
    case `0`:
      a = ":hourglass:";
    break;
    case `0`:
      a = ":pause_button:";
    break;
  }
  return a;
}

// Finding what our monitor status is.
function monitorStatus(arg) {
  var a = null;
  switch (arg) {
    case `9`:
      a = `Down`;
    break;
    case `2`:
      a = `Up`;
    break;
    case `1`:
      a = `Monitor restarting`;
    break;
    case `0`:
      a = `Monitor paused`;
    break;
  }
  return a;
}

// Definding what our monitor is.
function monitorType(arg) {
  var a = null;
  switch (arg) {
    case ``:
      a = `Website (Port 80)`;
    break;
    case `80`:
      a = `Website (Port 80)`;
    break;
    case `8080`:
      a = `Sub-website (Port 8080)`;
    break;
    case `25565`:
      a = `Minecraft Server (Port 25565)`;
    break;
    case `19132`:
      a = `Minecraft Bedrock Server (Port 19132)`;
    break;
  }
  return a;
}

const prefix = botInfo.prefix
module.exports.run = async (bot, message, args) => {
    // Shortcuts
    var channelmsg = message.channel;
    var guildmsg = message.guild;
    var usernameMSG = message.author.username;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    // ######################################################################################################################

    cl.getMonitors({customUptimeRatio: [1, 7, 30]}, function (err, res) {
      if (err) throw err;
      // Use this to find your monitor's ID.
      // console.dir(res);

      switch (args[1]) {
        // EXAMPLE:
        case `example`:
          // Find our information we need
          var monitor = findMonitor(res, "monitor-ID");
          var monitStatus = monitorStatus(monitor.status);
          var monitColor = embedColor(monitor.status);
          var emojiStatus = emojiMsg(monitor.status);
          var monitType = monitorType(monitor.port);

          // Create the discord message
          var embed = new Discord.RichEmbed()
            .setTitle(`${emojiStatus} ${monitor.friendlyname}`)
            .addField(`Type:`, monitType)
            .addField(`URL:`, monitor.url)
            .addField(`Status:`, monitStatus)
            .addField(`Today's uptime percentage:`, `${monitor.customuptimeratio[0]}%`)
            .setFooter(`Uptime detection by UptimeRobot.`)
            .setColor(monitColor)
          channelmsg.send({embed});
          // Log to console
          logger.info(`${monitor.friendlyname} was tested by ${usernameMSG} on ${guildmsg.name}.`)
          logger.info(`Status: ${monitStatus} | Today's uptime %: ${monitor.customuptimeratio[0]}`)
        break;

        case `kt5comp`:
          // KT5 Company Website
          var monitor = findMonitor(res, "785697887");
          var monitStatus = monitorStatus(monitor.status);
          var monitColor = embedColor(monitor.status);
          var emojiStatus = emojiMsg(monitor.status);
          var monitType = monitorType(monitor.port);

          var embed = new Discord.RichEmbed()
            .setTitle(`${emojiStatus} ${monitor.friendlyname}`)
            .addField(`Type:`, monitType)
            .addField(`URL:`, monitor.url)
            .addField(`Status:`, monitStatus)
            .addField(`Today's uptime percentage:`, `${monitor.customuptimeratio[0]}%`)
            .setFooter(`Uptime detection by UptimeRobot.`)
            .setColor(monitColor)
          channelmsg.send({embed});
          logger.info(`${monitor.friendlyname} was tested by ${usernameMSG} on ${guildmsg.name}.`)
          logger.info(`Status: ${monitStatus} | Today's uptime %: ${monitor.customuptimeratio[0]}`)
        break;
        case `ktg5-web`:
          // ktg5 Website
          var monitor = findMonitor(res, "785697898");
          var monitStatus = monitorStatus(monitor.status);
          var monitColor = embedColor(monitor.status);
          var emojiStatus = emojiMsg(monitor.status);
          var monitType = monitorType(monitor.port);

          var embed = new Discord.RichEmbed()
            .setTitle(`${emojiStatus} ${monitor.friendlyname}`)
            .addField(`Type:`, monitType)
            .addField(`URL:`, monitor.url)
            .addField(`Status:`, monitStatus)
            .addField(`Today's uptime percentage:`, `${monitor.customuptimeratio[0]}%`)
            .setFooter(`Uptime detection by UptimeRobot.`)
            .setColor(monitColor)
          channelmsg.send({embed});
          logger.info(`${monitor.friendlyname} was tested by ${usernameMSG} on ${guildmsg.name}.`)
          logger.info(`Status: ${monitStatus} | Today's uptime %: ${monitor.customuptimeratio[0]}`)
        break;
        case `712m`:
          // 712mount.
          var monitor = findMonitor(res, "785698323");
          var monitStatus = monitorStatus(monitor.status);
          var monitColor = embedColor(monitor.status);
          var emojiStatus = emojiMsg(monitor.status);
          var monitType = monitorType(monitor.port);

          var embed = new Discord.RichEmbed()
            .setTitle(`${emojiStatus} ${monitor.friendlyname}`)
            .addField(`Type:`, monitType)
            .addField(`URL:`, monitor.url)
            .addField(`Status:`, monitStatus)
            .addField(`Today's uptime percentage:`, `${monitor.customuptimeratio[0]}%`)
            .setFooter(`Uptime detection by UptimeRobot.`)
            .setColor(monitColor)
          channelmsg.send({embed});
          logger.info(`${monitor.friendlyname} was tested by ${usernameMSG} on ${guildmsg.name}.`)
          logger.info(`Status: ${monitStatus} | Today's uptime %: ${monitor.customuptimeratio[0]}`)
        break;
        case `kt5compDL`:
          // KT5 Company DL Website
          var monitor = findMonitor(res, "785716816")
          var monitStatus = monitorStatus(monitor.status);
          var monitColor = embedColor(monitor.status);
          var emojiStatus = emojiMsg(monitor.status);
          var monitType = monitorType(monitor.port);

          var embed = new Discord.RichEmbed()
            .setTitle(`${emojiStatus} ${monitor.friendlyname}`)
            .addField(`Type:`, monitType)
            .addField(`URL:`, monitor.url)
            .addField(`Status:`, monitStatus)
            .addField(`Today's uptime percentage:`, `${monitor.customuptimeratio[0]}%`)
            .setFooter(`Uptime detection by UptimeRobot.`)
            .setColor(monitColor)
          channelmsg.send({embed});
          logger.info(`${monitor.friendlyname} was tested by ${usernameMSG} on ${guildmsg.name}.`)
          logger.info(`Status: ${monitStatus} | Today's uptime %: ${monitor.customuptimeratio[0]}`)
        break;
        default:
          var embed = new Discord.RichEmbed()
            .setTitle(`Please select your monitor you'd like to check on.`)
            .addField(`\`${prefix}service kt5comp\``, `KT5 Company's website.`)
            .addField(`\`${prefix}service ktg5-web\``, `ktg5's website.`)
            .addField(`\`${prefix}service 712m\``, `712mount. (Minecraft Server)`)
            .addField(`\`${prefix}service kt5compDL\``, `KT5 Company's image & download hosting.`)
            .setColor(`0xFFFFDB`)
          channelmsg.send({embed});
        break;
      }
  });
}
 
module.exports.help = {
  name: "service"
}