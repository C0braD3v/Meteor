async function guildBanRemove(guild, user) {
    let guildDB = this.db.get('guilds').find({ id: msg.channel.guild.id }).value();
    if(guildDB !== undefined) {
        if(guildDB.modlogs.enabled === true) {
            this.utils.modlogs.banRemove(this.bot, guild, user, guildDB.modlogs.channelID);
        }
    }
}
module.exports = guildBanRemove;