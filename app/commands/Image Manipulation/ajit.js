const s = require("snekfetch")


module.exports = {
    command:"ajit",
    description: "Mr. Ajit Pai likes what he sees",
    syntax: ")>ajit `|` )>ajit [Attachment | User Name | User ID | User Mention | Image URL | Emoji ]",
    category: "Image Manipulation",
    permission: "sendMessages",
    botPermission: "attachFiles",
    execute: async (meteor, bot, msg, args) => {
        meteor.util.handleImgArgs(bot, msg, args, renderImage);
        async function renderImage(img) {
            s.get(`https://api.qoilo.com/imgen?url=${img}&effect=ajit`).then(r => msg.channel.createMessage('', {file: r.body, name: 'render.jpg'}))
        }
    }
}