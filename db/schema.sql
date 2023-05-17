DROP DATABASE IF EXISTS jobs_dev;
CREATE DATABASE jobs_dev;

\c jobs_dev;

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT NOT NULL,
    company VARCHAR(255),
    location VARCHAR(100),
    salary NUMERIC CHECK (salary >= 0), -- Adding the CHECK constraint
    url  TEXT NOT NULL,
    is_favorite BOOLEAN DEFAULT FALSE
);

CREATE TABLE reviews (
 id SERIAL PRIMARY KEY,
 reviewer TEXT NOT NULL,
 title TEXT NOT NULL,
 content TEXT NOT NULL,
 rating NUMERIC,
 CHECK (rating >= 0 AND rating <= 5),
 job_id INTEGER NOT NULL REFERENCES jobs (id)
  ON DELETE CASCADE
);