let express = require('express');
let router = express.Router();
const env = process.env.NODE_ENV || 'development'; // set environment
const config = require('../knexfile')[env]; // pull in correct db with env configs
const knex = require('knex')(config); // define database based on above

/* GET users listing. */
router.get('/', function(req, res) {
  knex('bars')
  .then((bars) => {
    res.send(bars);
  })
});

router.get('/id/:id', (req, res) => {
  knex('bars')
  .where('id', req.params.id)
  .then((bars) => {
    res.send(bars)
  });
});

router.get('/location/:location', (req, res) => {
  knex('bars')
  .where('location', req.params.location)
  .then((bars) => {
    res.send(bars)
  });
});

router.get('/name/:name', (req, res) => {
  knex('bars')
  .where('name', req.params.name)
  .then((bars) => {
    res.send(bars);
  });
});

router.get('/address/:address', (req, res) => {
  knex('bars')
  .where('address', req.params.address)
  .then((bars) => {
    res.send(bars);
  });
});

module.exports = router;