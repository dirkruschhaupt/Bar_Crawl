const express = require('express');
const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, location: 'rainey', name: 'Container Bar', address: '90 Rainey St'},
        {id: 2, location: 'rainey', name: 'Icenhauer’s', address: '83 Rainey St'},
        {id: 3, location: 'rainey', name: 'Clive Bar', address: '609 Davis St'},
        {id: 4, location: 'rainey', name: 'Half Step', address: '609 Davis St'},
        {id: 5, location: 'rainey', name: 'Bar 96', address: '96 Rainey St'},
        {id: 6, location: 'rainey', name: 'Unbarlievable', address: '76 Rainey St'},
        {id: 7, location: 'rainey', name: 'Parlor Room', address: '88 Rainey St'},
        {id: 8, location: 'rainey', name: 'Lucille', address: '77 Rainey St'},
        {id: 9, location: 'rainey', name: 'Bungalow', address: '92 Rainey St'},
        {id: 10, location: 'rainey', name: 'Lustre Pearl Rainey', address: '94 Rainey St'},
        {id: 11, location: 'rainey', name: 'Javelina', address: '69 Rainey St'},
        {id: 12, location: 'rainey', name: 'Bangers', address: '79 Rainey St'},
        {id: 13, location: 'rainey', name: 'The Alibi', address: '96 Rainey St'},
        {id: 14, location: 'rainey', name: 'Craft Pride', address: '61 Rainey St'},
        {id: 15, location: 'rainey', name: 'The Drafting Room', address: '88 1/2 Rainey St'},
        {id: 16, location: 'rainey', name: 'Geraldine’s', address: '605 Davis St'},
        {id: 17, location: 'rainey', name: 'Bar Ilegal', address: '609 Davis St'},
        {id: 18, location: 'rainey', name: 'L’estelle House', address: '88 1/2 Rainey St'},
        {id: 19, location: 'rainey', name: 'El Naranjo', address: '85 Rainey St'},
        {id: 20, location: 'rainey', name: 'Emmer & Rye', address: '51 Rainey St'},
        {id: 21, location: 'dirty', name: 'Library Bar', address: '407 E 6th St'},
        {id: 22, location: 'dirty', name: 'Blind Pig Pub', address: '317 E 6th St'},
        {id: 23, location: 'dirty', name: 'Friends Bar', address: '208 E 6th St'},
        {id: 24, location: 'dirty', name: 'Dirty Dog Bar', address: '505 E 6th St'},
        {id: 25, location: 'dirty', name: 'Darwin’s Piano Bar', address: '223 E 6th St'},
        {id: 26, location: 'dirty', name: 'Big Bang Bar', address: '415 E 6th St'},
        {id: 27, location: 'dirty', name: 'Midnight Cowboy', address: '313 E 6th St'},
        {id: 28, location: 'dirty', name: 'Moose Knuckle Pub', address: '406 E 6th St'},
        {id: 29, location: 'dirty', name: 'Coyote Ugly', address: '501 E 6th St'},
        {id: 30, location: 'dirty', name: 'Bat Bar', address: '218 E 6th St'},
        {id: 31, location: 'dirty', name: 'Parkside', address: '301 E 6th St'},
        {id: 32, location: 'dirty', name: 'The Lodge', address: '411 E 6th St'},
        {id: 33, location: 'dirty', name: 'Peckerheads', address: '402 E 6th St'},
        {id: 34, location: 'dirty', name: 'Lit Lounge', address: '215 E 6th St'},
        {id: 35, location: 'dirty', name: 'San Jac Saloon', address: '300 E 6th St'},
        {id: 36, location: 'dirty', name: '512 Bar', address: '408 E 6th St'},
        {id: 37, location: 'dirty', name: 'The Jackalope', address: '404 E 6th St'},
        {id: 38, location: 'dirty', name: 'Thirsty Nickel', address: '325 E 6th St'},
        {id: 39, location: 'dirty', name: 'Two Bucks', address: '503 E 6th St'},
        {id: 40, location: 'dirty', name: 'Easy Tiger', address: '709 E 6th St'},
        {id: 41, location: 'dirty', name: 'Buckshot', address: '422 E 6th St'},
        {id: 42, location: 'dirty', name: 'Voodoo Room', address: '419 E 6th St'},
        {id: 43, location: 'dirty', name: 'Pour Choices', address: '401 E 6th St'},
        {id: 44, location: 'dirty', name: 'Touche', address: '417 E 6th St'},
        {id: 45, location: 'dirty', name: 'The Dizzy Rooster', address: '306 E 6th St'},
        {id: 46, location: 'dirty', name: 'Eureka!', address: '200 E 6th St'},
        {id: 47, location: 'dirty', name: 'Roppolo’s', address: '414 E 6th St'},
        {id: 48, location: 'dirty', name: 'HandleBar', address: '121 E 5th St'},
        {id: 49, location: 'dirty', name: 'The Side Bar', address: '602 E 7th St'},
        {id: 50, location: 'west', name: 'Key Bar', address: '617 W 6th St'},
        {id: 51, location: 'west', name: 'Star Bar', address: '600 W 6th St'},
        {id: 52, location: 'west', name: 'The Dogwood', address: '715 W 6th St'},
        {id: 53, location: 'west', name: 'Parlor and Yard', address: '601 W 6th St'},
        {id: 54, location: 'west', name: 'The Rustic Tap', address: '613 W 6th St'},
        {id: 55, location: 'west', name: 'Kung Fu Saloon', address: '716 W 6th St'},
        {id: 56, location: 'west', name: 'Green Light Social', address: '720 W 6th St'},
        {id: 57, location: 'west', name: 'Buford’s', address: '700 W 6th St'},
        {id: 58, location: 'west', name: 'Concrete Cowboy', address: '719 W 6th St'},
        {id: 59, location: 'west', name: 'Pop', address: '620 W 6th St'},
        {id: 60, location: 'west', name: 'The Belmont', address: '305 W 6th St'},
        {id: 61, location: 'west', name: 'Austin Ale House', address: '301 W 6th St'},
        {id: 62, location: 'west', name: 'Brew Exchange', address: '706 W 6th St'},
        {id: 63, location: 'west', name: 'The Ranch', address: '710 W 6th St'},
        {id: 64, location: 'east', name: 'Whistler’s', address: '1816 E 6th St'},
        {id: 65, location: 'east', name: 'Shangri-La', address: '1016 E 6th St'},
        {id: 66, location: 'east', name: 'Revelry Kitchen + Bar', address: '1410 E 6th St'},
        {id: 67, location: 'east', name: 'Violent Crown Social Club', address: '1410 E 6th St'},
        {id: 68, location: 'east', name: 'The Brixton', address: '1412 E 6th St'},
        {id: 69, location: 'east', name: 'Rhino Room', address: '1012 E 6th St'},
        {id: 70, location: 'east', name: 'La Perla Bar', address: '1512 E 6th St'},
        {id: 71, location: 'east', name: 'Grackle', address: '1700 E 6th St'},
        {id: 72, location: 'east', name: 'La Holly', address: '2500 E 6th St'},
        {id: 73, location: 'east', name: 'Attabar', address: '1300 E 6th St'},
        {id: 74, location: 'east', name: 'Cuvee Coffee Bar', address: '2000 E 6th St'},
        {id: 75, location: 'east', name: 'The Volstead lounge', address: '1500 E 6th St'},
        {id: 76, location: 'east', name: 'Mezcaleria Tobala', address: '1816 E 6th St'},
        {id: 77, location: 'east', name: 'The Liberty', address: '1618 E 6th St'},
        {id: 78, location: 'east', name: 'Ah Sing Den', address: '1100 E 6th St'},
        {id: 79, location: 'east', name: 'Milonga Room', address: '1201 E 6th St'},
        {id: 80, location: 'east', name: 'Hi Hat Public House', address: '2121 E 6th St'},
        {id: 81, location: 'east', name: 'The Eastern', address: '1511 E 6th St'},
        {id: 82, location: 'east', name: 'Lazarus Brewing Co.', address: '1902 E 6th St'},
        {id: 83, location: 'east', name: 'Hotel Vegas', address: '1502 E 6th St'},
        {id: 84, location: 'east', name: 'Licha’s Cantina', address: '1306 E 6th St'},
        {id: 85, location: 'east', name: 'Latchkey', address: '1308 E 6th St'},
        {id: 86, location: 'east', name: 'Gelatria Gemelli', address: '1009 E 6th St'},
        {id: 87, location: 'east', name: 'Yellow Jacket Social Club', address: '1704 E 5th St'},
        {id: 88, location: 'east', name: 'The Hightower', address: '1209 E 7th St'},
        {id: 89, location: 'fourth', name: 'Pêche', address: '208 W 4th St'},
        {id: 90, location: 'fourth', name: 'Rain', address: '217 W 4th St'},
        {id: 91, location: 'fourth', name: 'Halcyon', address: '218 W 4th St'},
        {id: 92, location: 'fourth', name: 'Oilcan Harry’s', address: '211 W 4th S'},
        {id: 93, location: 'fourth', name: 'Academia', address: '208 W 4th St'},
        {id: 94, location: 'fourth', name: 'Hanger Lounge', address: '404 Colorado St'},
        {id: 95, location: 'fourth', name: 'The Capital Grille', address: '117 W 4th St'},
        {id: 96, location: 'fourth', name: 'RA Sushi Bar Restaurant', address: '117 W 4th St'},
        {id: 97, location: 'fourth', name: 'Sellers Underground', address: '213 W 4th St'},
        {id: 98, location: 'fourth', name: 'Highland Lounge', address: '404 Colorado St'}
    ];
    res.json(customers);
});

app.get('/api/west', (req, res) => {
    const west = [
        {id: 1, name: 'Key Bar, 617 W 6th St'},
        {id: 2, name: 'Star Bar, 600 W 6th St'},
        {id: 3, name: 'The Dogwood, 715 W 6th St'},
        {id: 4, name: 'Parlor and Yard, 601 W 6th St'},
        {id: 5, name: 'The Rustic Tap, 613 W 6th St'},
        {id: 6, name: 'Kung Fu Saloon, 716 W 6th St'},
        {id: 7, name: 'Green Light Social, 720 W 6th St'},
        {id: 8, name: 'Buford’s, 700 W 6th St'},
        {id: 9, name: 'Concrete Cowboy, 719 W 6th St'},
        {id: 10, name: 'Pop, 620 W 6th St'},
        {id: 11, name: 'The Belmont, 305 W 6th St'},
        {id: 12, name: 'Austin Ale House, 301 W 6th St'},
        {id: 13, name: 'Brew Exchang, 706 W 6th St'},
        {id: 14, name: 'The Ranch, 710 W 6th St'}     
    ];
    res.json(west);
});

app.get('/api/rainey', (req, res) => {
    const rainey = [
        {id: 1, name: 'Container Bar, 90 Rainey St'},
        {id: 2, name: 'Icenhauer’s, 83 Rainey St'},
        {id: 3, name: 'Clive Bar, 609 Davis St'},
        {id: 4, name: 'Half Step, 609 Davis St'},
        {id: 5, name: 'Bar 96, 96 Rainey St'},
        {id: 6, name: 'Unbarlievable, 76 Rainey St'},
        {id: 7, name: 'Parlor Room, 88 Rainey St'},
        {id: 8, name: 'Lucille, 77 Rainey St'},
        {id: 9, name: 'Bungalow, 92 Rainey St'},
        {id: 10, name: 'Lustre Pearl Rainey, 94 Rainey St'},
        {id: 11, name: 'Javelina, 69 Rainey St'},
        {id: 12, name: 'Bangers, 79 Rainey St'},
        {id: 13, name: 'The Alibi, 96 Rainey St'},
        {id: 14, name: 'Craft Pride, 61 Rainey St'},
        {id: 15, name: 'The Drafting Room, 88 1/2 Rainey St'},
        {id: 16, name: 'Geraldine’s, 605 Davis St'},
        {id: 17, name: 'Bar Ilegal, 609 Davis St'},
        {id: 18, name: 'L’estelle House, 88 1/2 Rainey St'},
        {id: 19, name: 'El Naranjo, 85 Rainey St'},
        {id: 20, name: 'Emmer & Rye, 51 Rainey St'}     
    ];
    res.json(rainey);
});

app.get('/api/dirty', (req, res) => {
    const dirty = [
        {id: 1, name: 'Library Bar, 407 E 6th St'},
        {id: 2, name: 'Blind Pig Pub, 317 E 6th St'},
        {id: 3, name: 'Friends Bar, 208 E 6th St'},
        {id: 4, name: 'Dirty Dog Bar, 505 E 6th St'},
        {id: 5, name: 'Darwin’s Piano Bar, 223 E 6th St'},
        {id: 6, name: 'Big Bang Bar, 415 E 6th St'},
        {id: 7, name: 'Midnight Cowboy, 313 E 6th St'},
        {id: 8, name: 'Moose Knuckle Pub, 406 E 6th St'},
        {id: 9, name: 'Coyote Ugly, 501 E 6th St'},
        {id: 10, name: 'Bat Bar, 218 E 6th St'},
        {id: 11, name: 'Parkside, 301 E 6th St'},
        {id: 12, name: 'The Lodge, 411 E 6th St'},
        {id: 13, name: 'Peckerheads, 402 E 6th St'},
        {id: 14, name: 'Lit Lounge, 215 E 6th St'},
        {id: 15, name: 'San Jac Saloon, 300 E 6th St'},
        {id: 16, name: '512 Bar, 408 E 6th St'},
        {id: 17, name: 'The Jackalope, 404 E 6th St'},
        {id: 18, name: 'Thirsty Nickel, 325 E 6th St'},
        {id: 19, name: 'Two Bucks, 503 E 6th St'},
        {id: 20, name: 'Easy Tiger, 709 E 6th St'},
        {id: 21, name: 'Buckshot, 422 E 6th St'},
        {id: 22, name: 'Voodoo Room, 419 E 6th St'},
        {id: 23, name: 'Pour Choices, 401 E 6th St'},
        {id: 24, name: 'Touche, 417 E 6th St'},
        {id: 25, name: 'The Dizzy Rooster, 306 E 6th St'},
        {id: 26, name: 'Eureka!, 200 E 6th St'},
        {id: 27, name: 'Roppolo’s, 414 E 6th St'},
        {id: 28, name: 'HandleBar, 121 E 5th St'},
        {id: 29, name: 'The Side Bar, 602 E 7th St'}    
    ];
    res.json(dirty);
});

app.get('/api/fourth', (req, res) => {
    const fourth = [
        {id: 1, name: 'Pêche, 208 W 4th St'},
        {id: 2, name: 'Rain, 217 W 4th St'},
        {id: 3, name: 'Halcyon, 218 W 4th St'},
        {id: 4, name: 'Oilcan Harry’s, 211 W 4th S'},
        {id: 5, name: 'Academia, 208 W 4th St'},
        {id: 6, name: 'Hanger Lounge, 404 Colorado St'},
        {id: 7, name: 'The Capital Grille, 117 W 4th St'},
        {id: 8, name: 'RA Sushi Bar Restaurant, 117 W 4th St'},
        {id: 9, name: 'Sellers Underground, 213 W 4th St'},
        {id: 10, name: 'Highland Lounge, 404 Colorado St'}     
    ];
    res.json(fourth);
});

app.get('/api/east', (req, res) => {
    const east = [
        {id: 1, name: 'Whistler’s, 1816 E 6th St'},
        {id: 2, name: 'Shangri-La, 1016 E 6th St'},
        {id: 3, name: 'Revelry Kitchen + Bar, 1410 E 6th St'},
        {id: 4, name: 'Violent Crown Social Club, 1410 E 6th St'},
        {id: 5, name: 'The Brixton, 1412 E 6th St'},
        {id: 6, name: 'Rhino Room, 1012 E 6th St'},
        {id: 7, name: 'La Perla Bar, 1512 E 6th St'},
        {id: 8, name: 'Grackle, 1700 E 6th St'},
        {id: 9, name: 'La Holly, 2500 E 6th St'},
        {id: 10, name: 'Attabar, 1300 E 6th St'},
        {id: 11, name: 'Cuvee Coffee Bar, 2000 E 6th St'},
        {id: 12, name: 'The Volstead lounge, 1500 E 6th St'},
        {id: 13, name: 'Mezcaleria Tobala, 1816 E 6th St'},
        {id: 14, name: 'The Liberty, 1618 E 6th St'},
        {id: 15, name: 'Ah Sing Den, 1100 E 6th St'},
        {id: 16, name: 'Milonga Room, 1201 E 6th St'},
        {id: 17, name: 'Hi Hat Public House, 2121 E 6th St'},
        {id: 18, name: 'The Eastern, 1511 E 6th St'},
        {id: 19, name: 'Lazarus Brewing Co., 1902 E 6th St'},
        {id: 20, name: 'Hotel Vegas, 1502 E 6th St'},
        {id: 21, name: 'Licha’s Cantina, 1306 E 6th St'},
        {id: 22, name: 'Latchkey, 1308 E 6th St'},
        {id: 23, name: 'Gelatria Gemelli, 1009 E 6th St'},
        {id: 24, name: 'Yellow Jacket Social Club, 1704 E 5th St'},
        {id: 25, name: 'The Hightower, 1209 E 7th St'}     
    ];
    res.json(east);
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

// let barsRouter = require('./routes/bars');

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




// 'use strict'; 

// /* eslint-env node */

// require('dotenv').config();
// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');

// const port = process.env.PORT || 5000;

// const app = express();
// const server = require('http').createServer(app);

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//     res.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type');
//     next();
// });

// app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(methodOverride("_method"));

// const barsRoute = require('./routes/bars');


// app.use('/bars', barsRoute);



// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client', 'index.html')));

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.sendStatus(err.status || 500);
// });


// app.use(express.static(__dirname + '/public'));

// app.listen(port);
// console.log(`Listening on port: ${port}`);


// module.exports = app;