const express = require('express');
const router = express.Router();

router.get('/session/info', (req, res) => {
  res.json({
    cargo: req.session.cargo || null
  });
});

module.exports = router;