const s = require("snekfetch")


module.exports = {
    command:"f",
    description: "Press f to pay respects",
    syntax: ")>f `|` )>f [Attachment | User Name | User ID | User Mention | Image URL | Emoji ]",
    category: "Image Manipulation",
    permission: "sendMessages",
    botPermission: "attachFiles",
    execute: async (meteor, bot, msg, args) => {
        meteor.utils.imgHandler.parse(bot, msg, args, renderImage);
        async function renderImage(img) {
            s.get(`https://api.meteorbot.space/f?url=${img}`).then(r => msg.channel.createMessage('', {file: r.body, name: 'render.jpg'}))
        }
    }
}