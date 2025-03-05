const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'users',
        [
          {
            nome: 'Tailene',
            email: 'tailene@gmail.com',
            password_hash: await bcryptjs.hash('123456', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            nome: 'Tailene1',
            email: 'tailene1@gmail.com',
            password_hash: await bcryptjs.hash('654321', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            nome: 'Tailene2',
            email: 'tailene2@gmail.com',
            password_hash: await bcryptjs.hash('123654', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
      {}
    );
  },

  async down () {

  }
};
