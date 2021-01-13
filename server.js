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
//  notworkingh?
app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));

app.listen(PORT, () => {
    console.log('App running on PORT:', PORT );
});