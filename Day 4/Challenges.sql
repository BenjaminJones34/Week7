-- -- challenge 2
-- SELECT * FROM current_job_detail WHERE job_title = "Tech Lead";

-- -- challenge 3
-- SELECT * FROM employee_detail WHERE gender = "F";

-- -- challenge 4
-- SELECT * FROM employee_detail WHERE Name LIKE "S%";

-- -- challenge 5
-- SELECT employee_detail.Name FROM employee_detail JOIN jobs_history ON employee_detail.employee_ID = jobs_history.employee_id WHERE jobs_history.job_title = "Developer";

-- -- challenge 6
-- SELECT laptop_id FROM laptop_detail WHERE os = "Ubuntu";

-- -- challenge 7
-- SELECT * FROM employee_detail WHERE Name LIKE "A%" OR Name LIKE "S%";