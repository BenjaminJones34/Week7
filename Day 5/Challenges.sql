-- -- challenge 1
-- CREATE TABLE great_names (employee_id INT, name VARCHAR(255));

-- -- challenge 2
-- INSERT INTO testDB.great_names VALUES (1, "Dingus");
-- INSERT INTO testDB.great_names VALUES (2, "Wingus");
-- INSERT INTO testDB.great_names VALUES (3, "Bingus");
-- INSERT INTO testDB.great_names VALUES (4, "Gingus");
-- INSERT INTO testDB.great_names VALUES (5, "Fungus");

-- -- challenge 3
-- DELETE FROM testDB.great_names WHERE employee_id = 3;

-- -- challenge 4
-- ALTER TABLE great_names ADD COLUMN great_name_ind VARCHAR(255);

-- -- challenge 5
-- INSERT INTO testDB.great_names VALUES (6, "Numpty", "Y");
-- INSERT INTO testDB.great_names VALUES (7, "Muppet", "Y");
-- INSERT INTO testDB.great_names VALUES (8, "Moron", "Y");
-- INSERT INTO testDB.great_names VALUES (9, "Blithering idiot", "Y");
-- INSERT INTO testDB.great_names VALUES (10, "Donkey", "Y");

-- -- challenge 6
-- UPDATE testDB.great_names SET great_name_ind = "N" WHERE employee_id = 10;