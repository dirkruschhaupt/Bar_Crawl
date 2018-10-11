const express = require('express');
const app = express();

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

app.get('/api/all', (req, res) => {
    const all = [
        {id: 1, name: 'Pêche, 208 W 4th St'},
        {id: 2, name: 'Rain, 217 W 4th St'},
        {id: 3, name: 'Halcyon, 218 W 4th St'},
        {id: 4, name: 'Oilcan Harry’s, 211 W 4th S'},
        {id: 5, name: 'Academia, 208 W 4th St'},
        {id: 6, name: 'Hanger Lounge, 404 Colorado St'},
        {id: 7, name: 'The Capital Grille, 117 W 4th St'},
        {id: 8, name: 'RA Sushi Bar Restaurant, 117 W 4th St'},
        {id: 9, name: 'Sellers Underground, 213 W 4th St'},
        {id: 10, name: 'Highland Lounge, 404 Colorado St'},
        {id: 11, name: 'Whistler’s, 1816 E 6th St'},
        {id: 12, name: 'Shangri-La, 1016 E 6th St'},
        {id: 13, name: 'Revelry Kitchen + Bar, 1410 E 6th St'},
        {id: 14, name: 'Violent Crown Social Club, 1410 E 6th St'},
        {id: 15, name: 'The Brixton, 1412 E 6th St'},
        {id: 16, name: 'Rhino Room, 1012 E 6th St'},
        {id: 17, name: 'La Perla Bar, 1512 E 6th St'},
        {id: 18, name: 'Grackle, 1700 E 6th St'},
        {id: 19, name: 'La Holly, 2500 E 6th St'},
        {id: 20, name: 'Attabar, 1300 E 6th St'},
        {id: 21, name: 'Cuvee Coffee Bar, 2000 E 6th St'},
        {id: 22, name: 'The Volstead lounge, 1500 E 6th St'},
        {id: 23, name: 'Mezcaleria Tobala, 1816 E 6th St'},
        {id: 24, name: 'The Liberty, 1618 E 6th St'},
        {id: 25, name: 'Ah Sing Den, 1100 E 6th St'},
        {id: 26, name: 'Milonga Room, 1201 E 6th St'},
        {id: 27, name: 'Hi Hat Public House, 2121 E 6th St'},
        {id: 28, name: 'The Eastern, 1511 E 6th St'},
        {id: 29, name: 'Lazarus Brewing Co., 1902 E 6th St'},
        {id: 30, name: 'Hotel Vegas, 1502 E 6th St'},
        {id: 31, name: 'Licha’s Cantina, 1306 E 6th St'},
        {id: 32, name: 'Latchkey, 1308 E 6th St'},
        {id: 33, name: 'Gelatria Gemelli, 1009 E 6th St'},
        {id: 34, name: 'Yellow Jacket Social Club, 1704 E 5th St'},
        {id: 35, name: 'The Hightower, 1209 E 7th St'},  
        {id: 36, name: 'Library Bar, 407 E 6th St'},
        {id: 37, name: 'Blind Pig Pub, 317 E 6th St'},
        {id: 38, name: 'Friends Bar, 208 E 6th St'},
        {id: 39, name: 'Dirty Dog Bar, 505 E 6th St'},
        {id: 40, name: 'Darwin’s Piano Bar, 223 E 6th St'},
        {id: 41, name: 'Big Bang Bar, 415 E 6th St'},
        {id: 42, name: 'Midnight Cowboy, 313 E 6th St'},
        {id: 43, name: 'Moose Knuckle Pub, 406 E 6th St'},
        {id: 44, name: 'Coyote Ugly, 501 E 6th St'},
        {id: 45, name: 'Bat Bar, 218 E 6th St'},
        {id: 46, name: 'Parkside, 301 E 6th St'},
        {id: 47, name: 'The Lodge, 411 E 6th St'},
        {id: 48, name: 'Peckerheads, 402 E 6th St'},
        {id: 49, name: 'Lit Lounge, 215 E 6th St'},
        {id: 50, name: 'San Jac Saloon, 300 E 6th St'},
        {id: 51, name: '512 Bar, 408 E 6th St'},
        {id: 52, name: 'The Jackalope, 404 E 6th St'},
        {id: 53, name: 'Thirsty Nickel, 325 E 6th St'},
        {id: 54, name: 'Two Bucks, 503 E 6th St'},
        {id: 55, name: 'Easy Tiger, 709 E 6th St'},
        {id: 56, name: 'Buckshot, 422 E 6th St'},
        {id: 57, name: 'Voodoo Room, 419 E 6th St'},
        {id: 58, name: 'Pour Choices, 401 E 6th St'},
        {id: 59, name: 'Touche, 417 E 6th St'},
        {id: 60, name: 'The Dizzy Rooster, 306 E 6th St'},
        {id: 61, name: 'Eureka!, 200 E 6th St'},
        {id: 62, name: 'Roppolo’s, 414 E 6th St'},
        {id: 63, name: 'HandleBar, 121 E 5th St'},
        {id: 64, name: 'The Side Bar, 602 E 7th St'},
        {id: 65, name: 'Container Bar, 90 Rainey St'},
        {id: 66, name: 'Icenhauer’s, 83 Rainey St'},
        {id: 67, name: 'Clive Bar, 609 Davis St'},
        {id: 68, name: 'Half Step, 609 Davis St'},
        {id: 69, name: 'Bar 96, 96 Rainey St'},
        {id: 70, name: 'Unbarlievable, 76 Rainey St'},
        {id: 71, name: 'Parlor Room, 88 Rainey St'},
        {id: 72, name: 'Lucille, 77 Rainey St'},
        {id: 73, name: 'Bungalow, 92 Rainey St'},
        {id: 74, name: 'Lustre Pearl Rainey, 94 Rainey St'},
        {id: 75, name: 'Javelina, 69 Rainey St'},
        {id: 76, name: 'Bangers, 79 Rainey St'},
        {id: 77, name: 'The Alibi, 96 Rainey St'},
        {id: 78, name: 'Craft Pride, 61 Rainey St'},
        {id: 79, name: 'The Drafting Room, 88 1/2 Rainey St'},
        {id: 80, name: 'Geraldine’s, 605 Davis St'},
        {id: 81, name: 'Bar Ilegal, 609 Davis St'},
        {id: 82, name: 'L’estelle House, 88 1/2 Rainey St'},
        {id: 83, name: 'El Naranjo, 85 Rainey St'},
        {id: 84, name: 'Emmer & Rye, 51 Rainey St'},
        {id: 85, name: 'Key Bar, 617 W 6th St'},
        {id: 86, name: 'Star Bar, 600 W 6th St'},
        {id: 87, name: 'The Dogwood, 715 W 6th St'},
        {id: 88, name: 'Parlor and Yard, 601 W 6th St'},
        {id: 89, name: 'The Rustic Tap, 613 W 6th St'},
        {id: 90, name: 'Kung Fu Saloon, 716 W 6th St'},
        {id: 91, name: 'Green Light Social, 720 W 6th St'},
        {id: 92, name: 'Buford’s, 700 W 6th St'},
        {id: 93, name: 'Concrete Cowboy, 719 W 6th St'},
        {id: 94, name: 'Pop, 620 W 6th St'},
        {id: 95, name: 'The Belmont, 305 W 6th St'},
        {id: 96, name: 'Austin Ale House, 301 W 6th St'},
        {id: 97, name: 'Brew Exchang, 706 W 6th St'},
        {id: 98, name: 'The Ranch, 710 W 6th St'}
    ];
    res.json(all);
});

app.use(function(req, res, next) {
    next(createError(404));
  });

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
