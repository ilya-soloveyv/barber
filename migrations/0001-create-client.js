'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('client', {
      iClientID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sClientLastName: {
        type: Sequelize.STRING,
      },
      sClientMiddleName: {
        type: Sequelize.STRING,
      },
      sClientFirstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dClientBirthday: {
        type: Sequelize.DATEONLY,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('client')
  },
}
