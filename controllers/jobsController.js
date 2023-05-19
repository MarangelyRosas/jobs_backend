// Dependencies
const express = require('express');
const jobs = express.Router();
const { 
    viewAllJobs,
    viewJob, 
    createJob, 
    deleteJob, 
    updateJob, 
} = require('../queries/jobs.js');

const {validateURL} = require("../validations/validateURL.js")

// Index (all jobs)
jobs.get('/', async (req, res) => {
    //http://localhost:5004/jobs
    const allJobs = await viewAllJobs();
    if (!allJobs.error) {
        res.status(200).json(allJobs);
    } else {
        res.status(500).json({ error: 'server error' });
    }
});

// Show (one/individual job)
jobs.get('/:id', async (req, res) => {
    const { id } = req.params;
    const job = await viewJob(id);
    console.log(job);
    if (!job.error) {
        res.status(200).json(job);
    } else if (job.error.code === 0) {
        res.status(404).json({ error: 'job not found' });
    } else {    
        res.status(500).json({ error: 'server error' });
    }
});

// Create (add new job)
jobs.post(
    '/', validateURL,
    (req, res, next) => {
        // validate req.body
        const { title, description, company, location, salary, url, is_favorite } = req.body;
        if (!title || !description || !company || !location || !salary || !url || !is_favorite ) {
            return res
                .status(422)
                .json({ error: 'body requires title, description, company, location, salary, url, and is_favorite' });
        }
        next();
    },
    async (req, res) => {
        const { title, description, company, location, salary, url, is_favorite } = req.body;
        
        const newJob = await createJob({
            title, 
            description, 
            company, 
            location, 
            salary, 
            url, 
            is_favorite
        });  
        if (!newJob.error) {
            res.status(201).json(newJob);
        } else {
            res.status(500).json({ error: 'server error' });
        }
    }
);

// Delete 
jobs.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedJob = await deleteJob(id);
    console.log(deletedJob);
    if (deletedJob.id) {
        res.status(201).json(deletedJob);
    } else {
        res.status(404).json("Job not found");
    }
});

// Update
jobs.put('/id', validateURL, async (req, res) => {
    const { id } = req.params;
    const job = req.body;
    const updatedJob = await updateJob(id, job);
    console.log(updatedJob);
    res.status(200).json(updatedJob);
    
});

module.exports = jobs;