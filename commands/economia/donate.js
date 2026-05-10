const { SlashCommandBuilder } = require('discord.js');
const db = require('../../database');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('donate')
    .setDescription('Doe coins para outro usuário')
    .addUserOption(option => option.setName('user').setDescription('Usuário para doar').setRequired(true))
    .addIntegerOption(option => option.setName('amount').setDescription('Quantidade').setRequired(true)),
  async execute(interaction) {
    const target = interaction.options.getUser('user');
    const amount = interaction.options.getInteger('amount');
    if (amount <= 0) return interaction.reply('Quantidade inválida!');
    await db.transferCoins(interaction.user.id, target.id, amount);
    await interaction.reply(`💸 Você doou **${amount} coins** para ${target.username}!`);
  }
};