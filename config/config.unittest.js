const ip = require("ip");
const sequelizeConfig = require("./config.json");

module.exports = appInfo => {
  const config = {};

  config.port = 3000;
  config.baseURL = `http://${ip.address()}:${config.port}`;
  config.sequelize = sequelizeConfig.test;

  return config;
};
