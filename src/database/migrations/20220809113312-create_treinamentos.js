module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('treinamentos', {
      cod_treinamento: {
        type: Sequelize.STRING(4),
        allowNull: false,
        primaryKey: true,
      },
      nome_treinamento: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      desc_treinamento: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      daleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('treinamentos');
  },
};
