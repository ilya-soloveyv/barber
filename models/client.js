'use strict'

const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    'client',
    {
      iClientID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      sClientLastName: {
        type: DataTypes.STRING,
      },
      sClientMiddleName: {
        type: DataTypes.STRING,
      },
      sClientFirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dClientBirthday: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'client',
    }
  )

  Client.associate = function (models) {}

  Client.get = async function ({ iClientID = false } = {}) {
    if (iClientID) {
      const client = await Client.findByPk(iClientID)
      return client
    } else {
      const clients = await Client.paginate()
      return clients
    }
  }

  sequelizePaginate.paginate(Client)
  return Client
}
