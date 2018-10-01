let express = require('express');
let router = express.Router();
const env = process.env.NODE_ENV || 'development'; // set environment
const config = require('../knexfile')[env]; // pull in correct db with env configs
const knex = require('knex')(config); // define database based on above

/* GET users listing. */
router.get('/', function(req, res) {
  knex('fourth')
  .then((fourth) => {
    res.send(fourth);
  })
});

router.get('/id/:id', (req, res) => {
  knex('fourth')
  .where('id', req.params.id)
  .then((fourth) => {
    res.send(fourth)
  });
});

router.get('/name/:name', (req, res) => {
  knex('fourth')
  .where('name', req.params.name)
  .then((fourth) => {
    res.send(fourth);
  });
});

router.get('/address/:address', (req, res) => {
  knex('fourth')
  .where('address', req.params.address)
  .then((fourth) => {
    res.send(fourth);
  });
});

module.exports = router;