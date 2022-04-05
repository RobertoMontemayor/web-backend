const dbConfig = require("./db-config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});
const db = {};
db.sequelize = sequelize;
// db.tutorials = require("./models/tutorials.js")(sequelize, Sequelize);
db.proyecto = require("./models/proyecto.js")(sequelize, Sequelize);
db.contacto = require("./models/contacto.js")(sequelize, Sequelize);
db.sequelize.sync();
module.exports = db;