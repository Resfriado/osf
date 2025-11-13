const express = require('express');
const path = require('path');
const router = express.Router();
const authController = require('../controllers/homeController');

const route = '/auth';
const newPath = 'frontend/pages/shop/pricing/index.html';

router.post(route, authController.login);

router.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', newPath));
});

module.exports = router;
