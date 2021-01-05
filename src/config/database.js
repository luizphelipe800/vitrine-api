const path = require('path');

module.exports = {
  development: {
    dialect: "sqlite",
    storage: path.resolve(__dirname, '..', '..', 'vitrinedb.sqlite')
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
