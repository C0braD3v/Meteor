const s = require("snekfetch")


module.exports = {
    command:"jojo",
    description: "oh no",
    syntax: ")>jojo `|` )>jojo [Attachment | User Name | User ID | User Mention | Image URL | Emoji ]",
    category: "Image Manipulation",
    permission: "sendMessages",
    botPermission: "attachFiles",
    execute: async (meteor, bot, msg, args) => {
        meteor.utils.imgHandler.parse(bot, msg, args, renderImage);
        async function renderImage(img) {
            s.get(`https://api.meteorbot.space/jojo?url=${img}`).then(r => msg.channel.createMessage('', {file: r.body, name: 'render.jpg'}))
        }
    }
}