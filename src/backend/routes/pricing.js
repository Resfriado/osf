const express = require("express");
const path = require("path");
const crypto = require("crypto");
const db = require("../../database/config/db"); // ajusta o caminho conforme sua pasta
const router = express.Router();

const route = '/pricing';
const newPath = 'frontend/pages/shop/booking/index.html';
const newRoute = '/booking';

router.post(route, (req, res) => {
  const { service } = req.body;
  console.log('💼 - Serviço selecionado: \x1b[90m', service , '\x1b[0m');
  res.redirect(newRoute);
});

router.get(newRoute, (req, res) => {
  res.sendFile(path.join(__dirname, "../../", newPath));
});

module.exports = router;
