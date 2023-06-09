\c jobs_dev;

-- CREATE TABLE jobs (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255),
--     description TEXT NOT NULL,
--     company VARCHAR(255),
--     location VARCHAR(100),
--     salary NUMERIC CHECK (salary >= 0) -- Adding the CHECK constraint
--     url  TEXT NOT NULL,
--     is_favorite BOOLEAN DEFAULT FALSE
-- );


INSERT INTO jobs (title, description, company, location, salary, url, is_favorite)
VALUES
  ('Software Engineer Media Services', 'Develop new and enhance existing parts of the shared frameworks that power all of Apple’s services products. Architect and build new APIs, and work with design to help define and implement user interfaces. As an engineer on the team, you will be contributing to all four of Apple’s major operating systems: iOS, tvOS, watchOS and macOS. Build out APIs to handle foundational features such as user authentication and purchases. You will have the opportunity to work alongside other cross-functional teams closely, in order to bring the best customer experiences to life.', 'Apple', 'New York, NY', 130000, 'https://www.linkedin.com/jobs/search/?currentJobId=3604586073&keywords=software%20engineer&location=new%20york#SALARY', true),
  ('Frontend Developer', 'The growing Global Digital team at PIMCO is seeking a talented UI/UX Developer to support broader business initiatives. Successful candidates will work closely with our team of designers, and engineers, to help bridge the gap between art and technical implementation. You will take an active role in helping define how our website looks as well as how it functions. Responsibilities will include the translation of designs to actual code that will produce high fidelity visual component while adhering to semantic HTML principles, ADA/WCAG compliance guidelines, and styling best practices.', ' eFinancialCareers', 'New York City, NY', 145000, 'https://www.linkedin.com/jobs/search/?currentJobId=3586918875&geoId=105080838&keywords=front%20end%20developer&location=New%20York%2C%20United%20States&refresh=true', false),
  ('Java Full Stack Developer - 4707213', 'Join our team as a full stack developer and work on exciting projects to build dynamic, visually-attractive, end-to-end, and innovative software product/apps including front-end and back-end. As an Accenture Flex employee, you will apply your skills and experience to help drive business transformation for leading organizations and communities. In addition to delivering innovative solutions for Accenture clients, you will work with a highly skilled, diverse network of people across Accenture businesses who are using the latest emerging technologies to address todays biggest business challenges.', 'Accenture', 'New York, NY', 160000, 'https://www.linkedin.com/jobs/search/?currentJobId=3596905892&geoId=105080838&keywords=full%20stack%20developer&location=New%20York%2C%20United%20States&refresh=true', true),
  ('Senior Software Engineer - Remote', 'We are looking for a Senior Software Engineer to join a company in the Underdog.io network. The Underdog.io network is a curated group of some of the fastest growing startups and tech companies in the country. We actively turn away more than 50% of companies that attempt to join. Our companies look for Senior Software Engineers proficient in JavaScript, Python, Go, Scala, Ruby, C, and more. Experience in libraries and frameworks such as React, Rails, Django, Angular, jQuery, and Express is a huge plus. The ideal candidate is motivated by working on complex technical problems and curious about the world around them. Many of our companies are looking for mid-to-senior level talent, both individual contributors and managers.', 'Underdog.io', 'New York, NY', 135000, 'https://www.linkedin.com/jobs/search/?currentJobId=3607352641&geoId=105080838&keywords=senior%20software%20engineer&location=New%20York%2C%20United%20States&refresh=true', false),
  ('Backend Software Engineer - Infrastructure Platform', ' Our Infrastructure Engineering team build and operate hyper-scale datacenters, manage the life cycle of server fleet, allocate cloud resources and create various cloud solutions, and provide infrastructure services including widely distributed Content Distribution Networks (CDNs). As an employee, you will apply your skills and experience to help build platforms, systems and services for internal and external teams to interact with the large scale production systems. You will also design, develop, test, deploy, maintain and improve software.', 'Tik Tok', 'New York, NY', 137000, 'https://www.linkedin.com/jobs/view/3548764754/', true);



-- CREATE TABLE reviews (
--  id SERIAL PRIMARY KEY,
--  reviewer TEXT NOT NULL,
--  title TEXT NOT NULL,
--  content TEXT NOT NULL,
--  rating NUMERIC,
--  CHECK (rating >= 0 AND rating <= 5),
--  job_id INTEGER NOT NULL REFERENCES jobs (id)
--   ON DELETE CASCADE
-- );

INSERT INTO reviews (job_id, reviewer, title, content, rating )
VALUES
(1, 'Lily', 'My Favorite', 'This website crushes it when it comes to detailed job descriptions', 3),
(2, 'Elsie', 'My Favorite', 'This website really inspired me to know my worth in the tech field', 5),
(3, 'Evan', 'My Least Favorite', 'This website crushes it when it comes to destroying my patience', 1),
(2, 'Julia', 'I Love It Here', 'I finally learned how to properly job search', 4),
(4, 'David', 'Amazing Job Site', 'Especially with the salary amounts I am seeing', 5),
(2, 'Brandon', 'So Helpful', 'I got some awesome recommendations for the career I am trying to forsee', 4),
(2, 'Madison', 'A lifesaver!','Helped me get straight to the jobs I was looking for, I never imagined this was possible!', 3),
(5, 'Latoya', 'Wow! 😌', 'I survived 6 hours of Job Searching!', 5),
(3, 'Gabrielle', 'My Friend Latoya', 'Gets a discount if I leave a positive review, so here it is', 4);