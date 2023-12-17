const router = require("express").Router();
const currencies = require("../controllers/currency.controller");

module.exports = (app) => {
  router.get("/all/:tenantId", currencies.all);
  router.get("/:id", currencies.get);

  app.use("/api/currencies", router);
};
