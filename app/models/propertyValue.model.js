module.exports = (sequelize, Sequelize) => {
  const propertyValue = sequelize.define("propertyValue", {

  }, {
    tableName: "property_values",
  });

  return propertyValue;
};
