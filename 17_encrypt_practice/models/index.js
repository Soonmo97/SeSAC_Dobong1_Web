'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.js')['development'];
const db = {};

console.log('config >>', config);

// const sequelize = new Sequelize(DB명, 사용자명, 비밀번호, config 정보 전체)
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./User')(sequelize, Sequelize);
module.exports = db;
