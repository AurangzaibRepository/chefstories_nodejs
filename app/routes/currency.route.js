const router = require("express").Router();
const currencies = require("../controllers/currency.controller");

module.exports = (app) => {
  router.get("/all/:tenantId?", currencies.all);

  app.use("/api/currencies", router);
};
