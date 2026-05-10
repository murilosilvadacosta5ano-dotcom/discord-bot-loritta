const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const db = require('../../database');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('daily')
    .setDescription('Receba sua recompensa diária'),
  async execute(interaction) {
    // Simple daily logic
    await db.addCoins(interaction.user.id, 500);
    await interaction.reply({ content: `✅ ${interaction.user.username} recebeu **500 coins** do daily!` });
  }
};