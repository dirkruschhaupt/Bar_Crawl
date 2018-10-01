let express = require('express');
let router = express.Router();
const env = process.env.NODE_ENV || 'development'; // set environment
const config = require('../knexfile')[env]; // pull in correct db with env configs
const knex = require('knex')(config); // define database based on above

/* GET users listing. */
router.get('/', function(req, res) {
  knex('east')
  .then((east) => {
    res.send(east);
  })
});

router.get('/id/:id', (req, res) => {
  knex('east')
  .where('id', req.params.id)
  .then((east) => {
    res.send(east)
  });
});

router.get('/name/:name', (req, res) => {
  knex('east')
  .where('name', req.params.name)
  .then((east) => {
    res.send(east);
  });
});

router.get('/address/:address', (req, res) => {
  knex('east')
  .where('address', req.params.address)
  .then((east) => {
    res.send(east);
  });
});

module.exports = router;