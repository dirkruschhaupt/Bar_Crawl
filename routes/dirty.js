let express = require('express');
let router = express.Router();
const env = process.env.NODE_ENV || 'development'; // set environment
const config = require('../knexfile')[env]; // pull in correct db with env configs
const knex = require('knex')(config); // define database based on above

/* GET users listing. */
router.get('/', function(req, res) {
  knex('dirty')
  .then((dirty) => {
    res.send(dirty);
  })
});

router.get('/id/:id', (req, res) => {
  knex('dirty')
  .where('id', req.params.id)
  .then((dirty) => {
    res.send(dirty)
  });
});

router.get('/name/:name', (req, res) => {
  knex('dirty')
  .where('name', req.params.name)
  .then((dirty) => {
    res.send(dirty);
  });
});

router.get('/address/:address', (req, res) => {
  knex('dirty')
  .where('address', req.params.address)
  .then((dirty) => {
    res.send(dirty);
  });
});

module.exports = router;