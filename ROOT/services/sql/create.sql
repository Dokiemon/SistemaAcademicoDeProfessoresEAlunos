CREATE DATABASE sapa

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(32),
    password VARCHAR(32),
    mail VARCHAR(32),
    phone INT,
    name VARCHAR(32)
)