const express = require('express');
const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, name: 'Container Bar', address: '90 Rainey St'},
        {id: 2, name: 'Icenhauer’s', address: '83 Rainey St'},
        {id: 3, name: 'Clive Bar', address: '609 Davis St'},
        {id: 4, name: 'Half Step', address: '609 Davis St'},
        {id: 5, name: 'Bar 96', address: '96 Rainey St'},
        {id: 6, name: 'Unbarlievable', address: '76 Rainey St'},
        {id: 7, name: 'Parlor Room', address: '88 Rainey St'},
        {id: 8, name: 'Lucille', address: '77 Rainey St'}
    ];
    res.json(customers);
});

app.use(function(req, res, next) {
    next(createError(404));
  });

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);


// 'use strict'

// // let fs = require('fs');
// let express = require('express');
// let path = require('path');
// let app = express();
// let port = process.env.PORT || 5000;

// let morgan = require('morgan');
// let bodyParser = require('body-parser');

// let barsRouter = require('./router/bars');

// app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(path.join('public')));

// app.disable('x-powered-by');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan('short'));

// app.use(barsRouter);

// app.use(function(req, res) {
//   res.sendStatus(404);
// });

// app.use((err, req, res, next) => {
//   if (err.status) {
//     return res
//       .status(err.status)
//       .set('Content-Type', 'text/plain')
//       .send(err.message);
//   }

//   console.error(err.stack);
//   res.sendStatus(500);
// });

// app.listen(5000, function () {
//   console.log(`Server running on port ${port}`);
// });

// module.exports = app;