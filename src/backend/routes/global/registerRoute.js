const express = require("express");
const router = express.Router();
const controller = require("../../controllers/global/registerController");

router.get("/register", controller.page);
router.post("/register", controller.register)

module.exports = router;