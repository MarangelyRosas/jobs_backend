const db = require("../db/dbConfig.js");

const viewAllJobs = async () => {
    try {
        const allJobs = await db.any('SELECT * FROM jobs');
        return allJobs;
    } catch (error) {
        return { error: error };
    }
};

const viewJob = async (id) => {
    console.log(id);
    try {
        const job = await db.one(`SELECT * FROM jobs WHERE id=${id}`);
        return job;
    } catch (error) {
        return { error: error };
    }
};

const createJob = async (job) => {
    try {
        const newJob = await db.one(
         `INSERT INTO 
            jobs(title, description, company, location, salary, url, is_favorite)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *;`,
        [job.title, job.description, job.company, job.location, job.salary, job.url, job.is_favorite]
        );
        return newJob;
        } catch (error) {
        return { error: error };
    }
};

const deleteJob = async (id) => { // jobs/id
    try{
        const deletedJob = await db.one('DELETE FROM jobs WHERE id=$1 RETURNING *', id)
        return deletedJob;
    } catch(error) {
        return error;
    }
};

const updateJob = async (id, job) => { // jobs/id
    try {
        const updatedJob = await db.one(
          `UPDATE jobs SET title=$1, description=$2, company=$3, location=$4, salary=$5, url=$6, is_favorite=$7 WHERE id=$8 RETURNING *`,
          [job.title, job.description, job.company, job.location, job.salary, job.url, job.is_favorite, id]
        );
        return updatedJob;
    } catch (error) {
        return error;
    } 
};

module.exports = {
    viewAllJobs,
    viewJob,
    createJob,
    deleteJob,
    updateJob
};