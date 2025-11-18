const express = require("express");
const router = express.Router();
const controller = require("../controllers/homeController");

router.post("/home", controller.login);

module.exports = router;