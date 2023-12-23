const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
  },
);

const db = {
  Sequelize,
  sequelize,
};

db.tenants = require("./tenant.model")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);
db.currencies = require("./currency.model")(sequelize, Sequelize);
db.languages = require("./language.model")(sequelize, Sequelize);
db.properties = require("./property.model")(sequelize, Sequelize);

// Model relations
db.tenants.hasMany(db.users, {
  foreignKey: "tenant_id",
});
db.users.belongsTo(db.tenants, {
  foreignKey: "tenant_id",
});

db.tenants.hasMany(db.currencies, {
  foreignKey: "tenant_id",
});
db.currencies.belongsTo(db.tenants, {
  foreignKey: "tenant_id",
});

db.tenants.hasMany(db.languages, {
  foreignKey: "tenant_id",
});
db.languages.belongsTo(db.tenants, {
  foreignKey: "tenant_id",
});

db.tenants.hasMany(db.proeprties, {
  foreignKey: "tenant_id",
});
db.properties.belongsTo(db.tenants, {
  foreignKey: "tenant_id",
});

module.exports = db;
