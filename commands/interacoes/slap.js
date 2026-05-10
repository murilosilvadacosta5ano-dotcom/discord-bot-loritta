const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('slap')
    .setDescription('Dá um tapa em alguém')
    .addUserOption(option => option.setName('user').setDescription('Usuário').setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    await interaction.reply(`${interaction.user} deu um tapa em ${user} 👋`);
  }
};