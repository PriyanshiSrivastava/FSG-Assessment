const Sequelize = require("sequelize");
// const { NODE_ENV } = require("../env-config/server-config");
const env = "development";
const configFile = require("../../config/config");
const config = configFile[env];

const sequelize = new Sequelize(
  'postgres',
  'postgres',
  'postgres', {
    host: 'localhost',
    dialect: "postgres",
    operatorsAliases: "0",
    logging: true,
    pool: {
      max: 2,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  },
);
console.log("connection setting up")
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
module.exports = {
  sequelize,
  Sequelize,
};