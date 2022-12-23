const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { MONGOURI } = require('./keys')

const PORT = 5000;

mongoose.connect(MONGOURI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo yeah')
})

mongoose.connection.on('error', (err) => {
    console.log('err Connected', err)
})

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
})