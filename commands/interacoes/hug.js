const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hug')
    .setDescription('Abraça alguém')
    .addUserOption(option => option.setName('user').setDescription('Usuário para abraçar').setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const embed = new EmbedBuilder()
      .setDescription(`${interaction.user} abraçou ${user} 🤗`)
      .setColor(0xff69b4);
    await interaction.reply({ embeds: [embed] });
  }
};