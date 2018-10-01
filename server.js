const express = require('express');
const app = express();
app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, bar: 'Container Bar', address: '90 Rainey St'},
        {id: 2, bar: 'Icenhauer’s', address: '83 Rainey St'},
        {id: 3, bar: 'Clive Bar', address: '609 Davis St'},
        {id: 4, bar: 'Half Step', address: '609 Davis St'},
        {id: 5, bar: 'Bar 96', address: '96 Rainey St'},
        {id: 6, bar: 'Unbarlievable', address: '76 Rainey St'},
        {id: 7, bar: 'Parlor Room', address: '88 Rainey St'},
        {id: 8, bar: 'Lucille', address: '77 Rainey St'}
    ];
    res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);