const router = require("express").Router();
const properties = require("../controllers/property.controller");

module.exports = (app) => {
  router.get("/all/:tenantId", properties.all);
  router.get("/:id", properties.get);
  router.post("/", properties.add);
  router.put("/:id", properties.update);

  app.use("/api/properties/", router);
};
