const router = require("express").Router();
const tenants = require("../controllers/tenant.controller");
const { upload } = require("../middlewares/upload.middleware");

module.exports = (app) => {
  router.get("/all", tenants.all);
  router.get("/:pageNumber/:keyword?", tenants.listing);
  router.post("/", upload("tenants").single("logo"), tenants.add);
  router.put("/:id", tenants.update);

  app.use("/api/tenants", router);
};
