const Discord = require('discord.js')
const { Prefix, CommandsHyperlink } = require('../../settings.json')

module.exports = {
    name: `botinfo`,
    desc: `Displays User And Bot Latency`,
    usage: `\`${Prefix}botinfo\``,
    category: `Information`,
    accessibly: `Everyone`,
    aliases: ['botinfo'],
    cooldown: 10,
    details: `[botinfo](${CommandsHyperlink} 'Displays User And Bot Latency')`,
    permissions: [ ],
    status: "Active",
    launch: async(client, message, args) => {
        try {
            // -- Up Time
            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            let uptime = `${days}D:${hours}H:${minutes}M:${seconds}S`;
            // -- Close
            const Embed = new Discord.MessageEmbed()
            .setAuthor(client.user.tag, client.user.displayAvatarURL())
            .setColor("PURPLE")
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`${client.user.username}'s Info`)
            .setDescription(
                `***Stats***\n`+
                `Created At: \`\`${client.user.createdAt.toLocaleString()}\`\`\n`+
                `Joined Date: \`\`${message.guild.me.joinedAt.toLocaleString()}\`\`\n`+
                `Uptime: \`\`${uptime}\`\`\n`+
                `Hosted on: \`\`Windows 8\`\``
            )
            .addField("Developer", `- [Github](https://github.com/axvia)`)
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL()).setTimestamp()
            message.channel.send(Embed)
        } catch (e) {
            return console.log(`Error. Unable to execute the Command. // Error: ${e} //`)
        }
    }
}
