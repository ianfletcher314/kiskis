const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('584684231dsdfv351sr815drg6d1f35sfb31232');

class Secret extends Model {
  //TO DO DECRYPT FUNCTION
 }

Secret.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    date_edited: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    hooks: {
      beforeCreate: async function (newUserData) {
         newUserData.body = await cryptr.encrypt(newUserData.body);
        return newUserData;
      },
      // beforeUpdate: async function (newUserDataUpdate) {
      //   console.log('before update hook 2', newUserDataUpdate)
      //   newUserDataUpdate.body = await cryptr.encrypt(newUserDataUpdate.body);
      //   return newUserDataUpdate;
      // },
      // afterUpdate: async (newUserData) => {
      //   newUserData.body = await cryptr.decrypt(newUserData.body);
      //   return updatedUserData;
      // },
      afterFind: async function (newUserDatafind) {
        newUserDatafind.body = await cryptr.decrypt(newUserDatafind.body);
       return newUserDatafind;
    },
  },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'secret',
  }
  );

module.exports = Secret;