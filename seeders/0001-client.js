'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'client',
      [
        {
          iClientID: 1,
          sClientLastName: 'Купер',
          sClientMiddleName: 'Ли',
          sClientFirstName: 'Шелдон',
          dClientBirthday: '1987-04-25',
        },
        {
          iClientID: 2,
          sClientLastName: 'Хофстедер',
          sClientMiddleName: null,
          sClientFirstName: 'Леонард',
          dClientBirthday: null,
        },
        {
          iClientID: 3,
          sClientLastName: 'Куттрапале',
          sClientMiddleName: 'Рамаян',
          sClientFirstName: 'Раджеш',
          dClientBirthday: null,
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('client', null, {})
  }
}
