const path = require('path');
const express = require('express');

module.exports = (app) => {
  app.use('/public', express.static(path.join(__dirname, '../../frontend/public')));
};