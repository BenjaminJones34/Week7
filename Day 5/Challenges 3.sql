-- -- challenge 1
-- SELECT job_title, MAX(salary) FROM current_job_detail GROUP BY job_title;

-- -- challenge 2
-- SELECT job_title, os, COUNT(os) FROM current_job_detail cjd
-- 	INNER JOIN laptop_detail ld
-- 	ON cjd.laptop_id  = ld.laptop_id 
-- GROUP BY job_title, os;

-- -- challenge 3
-- SELECT cjd.job_title, AVG(salary) FROM current_job_detail cjd
--     INNER JOIN jobs_history jh
--     ON cjd.Employee_ID = jh.employee_id
-- WHERE jh.job_title = "Apprentice Developer"
-- GROUP BY cjd.job_title;

-- -- challenge 4
-- SELECT cjd.salary, cjd.employee_id, ed.name FROM current_job_detail cjd
-- 	INNER JOIN employee_detail ed 
-- 	ON cjd.employee_id = ed.Employee_ID
-- ORDER BY salary DESC LIMIT 1;