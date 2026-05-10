const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const db = require('../../database');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('balance')
    .setDescription('Mostra seu saldo de coins'),
  async execute(interaction) {
    const user = await db.getUser(interaction.user.id);
    const embed = new EmbedBuilder()
      .setTitle('💰 Seu Saldo')
      .setDescription(`${interaction.user.username}, você tem **${user.coins} coins**!`)
      .setColor(0x00ff00);
    await interaction.reply({ embeds: [embed] });
  }
};