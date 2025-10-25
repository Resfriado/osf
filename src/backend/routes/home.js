const express = require("express");
const path = require("path");
const crypto = require("crypto");
const db = require("../../database/config/db"); // ajusta o caminho conforme sua pasta
const router = express.Router();

const route = '/home';
const newPath = 'frontend/pages/auth/index.html';
const newRoute = '/auth';

router.post(route, (req, res) => {
  const { service } = req.body;
  console.log('🔒 - Login requisitado');
  res.redirect(newRoute);
});

router.get(newRoute, (req, res) => {
  res.sendFile(path.join(__dirname, "../../", newPath));
});

module.exports = router;
