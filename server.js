const express = require('express');
const mongoose = require('mongoose');
// const logger = require('morgan');

// require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

// app.use(logger('dev'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitnessApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(require('./routes/apiroutes.js'));
app.use(require('./routes/htmlroutes.js'));

app.listen(PORT, () => {
    console.log('App running on PORT:', PORT );
});