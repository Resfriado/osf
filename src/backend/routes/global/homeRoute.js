const express = require("express");
const router = express.Router();
const controller = require("../../controllers/global/homeController");

router.get("/home", controller.page);

module.exports = router;