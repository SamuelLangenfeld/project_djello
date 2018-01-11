var env = require("dotenv").config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: "djello_development",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: console.log
  },
  test: {
    username: null,
    password: null,
    database: "djello_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable: "POSTGRES_URL",
    dialect: "postgres"
  }
};
