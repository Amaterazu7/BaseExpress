'use strict';

const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => handler(res));
server.listen(port, () => console.log(`Base app listening on port ==> :${port}`));

const handler = (res) => {
    res.send('HELLO FROM EXPRESS! \n');
};
