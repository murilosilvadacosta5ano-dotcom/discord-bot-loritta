const { SlashCommandBuilder } = require('discord.js');
const db = require('../../database');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('coinflip')
    .setDescription('Aposte em cara ou coroa')
    .addIntegerOption(option => option.setName('bet').setDescription('Valor da aposta').setRequired(true))
    .addStringOption(option => option.setName('side').setDescription('cara ou coroa').setRequired(true)),
  async execute(interaction) {
    const bet = interaction.options.getInteger('bet');
    const side = interaction.options.getString('side').toLowerCase();
    const result = Math.random() > 0.5 ? 'cara' : 'coroa';
    let message = `Resultado: ${result.toUpperCase()}. `;
    if (side === result) {
      await db.addCoins(interaction.user.id, bet);
      message += `Você ganhou **${bet} coins**!`;
    } else {
      await db.addCoins(interaction.user.id, -bet);
      message += `Você perdeu **${bet} coins**!`;
    }
    await interaction.reply(message);
  }
};