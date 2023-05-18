// Dependencies
const express = require('express');
const cors = require('cors');
const jobsController = require('./controllers/jobsController');

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to My FSW Developer Job Listings');
});

app.use('/jobs', jobsController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;