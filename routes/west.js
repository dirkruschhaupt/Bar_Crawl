let express = require('express');
let router = express.Router();
const env = process.env.NODE_ENV || 'development'; // set environment
const config = require('../knexfile')[env]; // pull in correct db with env configs
const knex = require('knex')(config); // define database based on above

/* GET users listing. */
router.get('/', function(req, res) {
  knex('west')
  .then((west) => {
    res.send(west);
  })
});

router.get('/id/:id', (req, res) => {
  knex('west')
  .where('id', req.params.id)
  .then((west) => {
    res.send(west)
  });
});

router.get('/name/:name', (req, res) => {
  knex('west')
  .where('name', req.params.name)
  .then((west) => {
    res.send(west);
  });
});

router.get('/address/:address', (req, res) => {
  knex('west')
  .where('address', req.params.address)
  .then((west) => {
    res.send(west);
  });
});

module.exports = router;