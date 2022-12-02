const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ronaldo")
    .setDescription("Ronaldo griddys on you!")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator), // only allowed for admin users
    execute(interaction) {
        interaction.reply({content: "Here's Ronaldo steps up for the griddy and scores with demolishing power and conviction", ephemeral: true})
    },
};