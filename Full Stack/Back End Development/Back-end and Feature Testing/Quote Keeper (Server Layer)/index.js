// routes/index.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.render('index', {source, attributed, quote});
    const { source, attributed, ,quote } = req.body;
  

});

router.get('/', (req, res) => {
  res.render('index');
})

module.exports = router;
