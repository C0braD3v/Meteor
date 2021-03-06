const snekfetch = require("snekfetch");
module.exports = {
  command:"help",
  description: "Get Help",
  syntax: ")>help `|` )>help [command name]",
  category: "Utility",
  permission: "sendMessages",
  botPermission: "embedLinks",
  execute: async (meteor, bot, msg, args) => {
    let prefix = ")>";
    /*
    let guildDB = meteor.db.get('guilds').find({ id: msg.channel.guild.id }).value();
    if(guildDB !== undefined) {
      if(guildDB.prefix) {
        prefix = guildDB.prefix
      }
    }*/
    if (!args[0] || args[0] === undefined) {
      await msg.channel.createMessage({ embed: { 
        color: 0x36393E, 
        fields: [
          {name: "All Commands", value: "All commands for Meteor are listed here on our website: https://meteorbot.space"},
          {name: "Our Discord Server 🏰", value: "https://meteorbot.space/discord"},
          {name: "Donations", value: "https://meteorbot.space/donate"}
        ],
        author: {
          icon_url: msg.author.avatarURL,
          name: `${msg.author.username}#${msg.author.discriminator}`
        },
        footer: {
          text: `${meteor.commands.length} commands loaded // "${prefix}help [cmd name]" for info on a specific cmd`
        }
      }})
    }
    if(args[0] !== undefined) {
      let commandName = args[0];
      let syntax = null;
      let description = null;
      let category = null;
      let permission = null;
      for(i = 0; i < meteor.commands.length; i++) {
        if(meteor.commands[i].command.toLowerCase() === args[0]) {
          syntax = meteor.commands[i].syntax;
          description = meteor.commands[i].description;
          category = meteor.commands[i].category;
          permission = meteor.commands[i].permission;
        }
      }
      await msg.channel.createMessage({ embed: { 
        color: 0x36393E,
        title: `Help: ${commandName.toUpperCase()}`, 
        fields: [
          {name: "Description", value: description},
          {name: "Syntax", value: syntax.replace(/\)>/g, prefix)},
          {name: "Category", value: category},
          {name: "Permissions Required", value: permission}
        ],
        author: {
          icon_url: msg.author.avatarURL,
          name: `${msg.author.username}#${msg.author.discriminator}`
        } 
      }})
    }
  }
}