const router = require("express").Router();
const users = require("../controllers/user.controller");

module.exports = (app) => {
  router.get("/all", users.all);
};
