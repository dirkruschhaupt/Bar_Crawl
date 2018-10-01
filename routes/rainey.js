let express = require('express');
let router = express.Router();
const env = process.env.NODE_ENV || 'development'; // set environment
const config = require('../knexfile')[env]; // pull in correct db with env configs
const knex = require('knex')(config); // define database based on above

/* GET users listing. */
router.get('/', function(req, res) {
  knex('rainey')
  .then((rainey) => {
    res.send(rainey);
  })
});

router.get('/id/:id', (req, res) => {
  knex('rainey')
  .where('id', req.params.id)
  .then((rainey) => {
    res.send(rainey)
  });
});

router.get('/name/:name', (req, res) => {
  knex('rainey')
  .where('name', req.params.name)
  .then((rainey) => {
    res.send(rainey);
  });
});

router.get('/address/:address', (req, res) => {
  knex('rainey')
  .where('address', req.params.address)
  .then((rainey) => {
    res.send(rainey);
  });
});

module.exports = router;