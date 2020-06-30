const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  let queryString = 'SELECT * FROM greetings;';

  db.query(queryString, (err, results) => {
    if(err) {
      console.log(err.stack);
    } else {
      res.json(results.rows);
    }
  });
});

module.exports = router;
