const s = require("snekfetch")


module.exports = {
    command:"tv",
    description: "point something at the TV",
    syntax: ")>tv `|` )>tv [Attachment | User Name | User ID | User Mention | Image URL | Emoji ]",
    category: "Image Manipulation",
    permission: "sendMessages",
    botPermission: "attachFiles",
    execute: async (meteor, bot, msg, args) => {
        meteor.utils.imgHandler.parse(bot, msg, args, renderImage);
        async function renderImage(img) {
            s.get(`https://api.meteorbot.space/tv?url=${img}`).then(r => msg.channel.createMessage('', {file: r.body, name: 'render.jpg'}))
        }
    }
}