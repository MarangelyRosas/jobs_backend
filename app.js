// Dependencies
const express = require('express');
const cors = require('cors');
const jobsController = require('./controllers/jobsController');
// const reviewsController = require('./controllers/reviewsController');

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to CodeCareer!');
});

app.use('/jobs', jobsController);
// app.use('/reviews', reviewsController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;