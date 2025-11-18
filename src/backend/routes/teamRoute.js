const express = require("express");
const router = express.Router();
const controller = require("../controllers/teamController");

router.get("/team", controller.page);

module.exports = router;