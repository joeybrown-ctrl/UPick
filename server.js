require('dotenv').config();

// Configuration check.
// Disable this at your own risk
require('./utils/verifyConfiguration')();

// Requiring necessary npm packages
const express = require('express');
const path = require('path');
// Requiring our routes
const routes = require('./controllers');
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require('./models');
// Bringing in Morgan, a nice logger for our server
const morgan = require('morgan');
// Compression
const compression = require('compression');
//Required for upload image ability
const cloudinary = require('cloudinary');
const formData = require('express-form-data');
const cors = require('cors');
const { CLIENT_ORIGIN } = require('./config/config.js');

// Creating express app
const app = express();

// Set up our middleware!
// Dev Logging. Only works in test or development
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// enable compression middleware
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Add all our backend routes
app.use(routes);

// Send all other requests to react app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

db.sequelize.sync({ force: false }).then(function () {
    if (process.env.NODE_ENV === 'test') {
        db.User.create({ email: 'test@test.com', password: 'password' }).then(
            () => {
                console.log('Test User Created');
            }
        );
    }
    app.listen(PORT, function () {
        console.log(`Server now on port ${PORT}!`);
    });
});

//Sending photos to cloudinary storage
cloudinary.config({
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_APIIKEY: process.env.API_KEY,
    CLOUD_API_SECRET: process.env.API_SECRET
});

app.use(cors({
    origin: CLIENT_ORIGIN
}));

app.use(formData.parse());

app.post('/image-upload-single', (req, res) => {
    const path = Object.values(Object.values(req.files)[0])[0].path;
    cloudinary.uploader.upload(path)
        .then(image => res.json([image]));
});
