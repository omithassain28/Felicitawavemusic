const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const Command = require("../../structures/Command.js");

module.exports = class About extends Command {
  constructor(client) {
    super(client, {
      name: "about",
      description: {
        content: "Shows information about the bot",
        examples: ["about"],
        usage: "about",
      },
      category: "info",
      aliases: ["ab"],
      cooldown: 3,
      args: false,
      player: {
        voice: false,
        dj: false,
        active: false,
        djPerm: null,
      },
      permissions: {
        dev: false,
        client: ["SendMessages", "ViewChannel", "EmbedLinks"],
        user: [],
      },
      slashCommand: true,
      options: [],
    });
  }
  async run(client, ctx) {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Invite Me")
        .setStyle(ButtonStyle.Link)
        .setURL(
          `https://discord.gg/47pCJuCEac`
        ),
      new ButtonBuilder()
        .setLabel("Support Server")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/47pCJuCEac")
    );
    const embed = this.client
      .embed()
      .setAuthor({
        name: "Felicità",
        iconURL:
          "https://images-ext-1.discordapp.net/external/dff2nObSuQY8mWBGGMNePLc4G0Ghw7Pxtgq2T4bKuWQ/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1064447751984791572/6c93d68ac2a30ab765a3c3637eba36e9.png?format=webp&quality=lossless&width=416&height=416",
      })
      .setThumbnail(
        "https://images-ext-1.discordapp.net/external/dff2nObSuQY8mWBGGMNePLc4G0Ghw7Pxtgq2T4bKuWQ/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1064447751984791572/6c93d68ac2a30ab765a3c3637eba36e9.png?format=webp&quality=lossless&width=416&height=416"
      )
      .setColor(this.client.color.main)
      .addFields([
        {
          name: "Creator",
          value: "[king5929](https://discord.gg/47pCJuCEac)",
          inline: true,
        },
        {
          name: "Repository",
          value: "[Here](https://discord.gg/47pCJuCEac)",
          inline: true,
        },
        {
          name: "Support",
          value: "[Here](https://discord.gg/47pCJuCEac)",
          inline: true,
        },
        {
          name: "\u200b",
          value: `He really wanted to make his first open source project ever for more coding experience. In this project, he was challenged to make a project with less bugs. Hope you enjoy using Felicità!`,
          inline: true,
        },
      ]);
    return await ctx.sendMessage({
      content: "",
      embeds: [embed],
      components: [row],
    });
  }
};
