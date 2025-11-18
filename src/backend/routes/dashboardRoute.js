const express = require("express");
const router = express.Router();
const controller = require("../controllers/dashboardController");

router.get("/dashboard", controller.page);

module.exports = router;