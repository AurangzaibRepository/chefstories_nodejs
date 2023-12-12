const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

// Add middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Synchronize models
db.sequelize.sync({ alter: true });

// Include routes
require("./app/routes/tenant.route")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
