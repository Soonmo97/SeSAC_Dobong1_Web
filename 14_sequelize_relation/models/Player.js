const { INTEGER, INET } = require('sequelize');

const PlayerModel = (Sequelize, DataTypes) => {
  const Player = Sequelize.define(
    'Player',
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Player;
};

module.exports = PlayerModel;
