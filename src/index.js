const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

//settings
app.set('port', process.env.PORT);
//routes

//middlewares

//server
app.listen(app.get('port'), () => {
    console.log('server running');
});
