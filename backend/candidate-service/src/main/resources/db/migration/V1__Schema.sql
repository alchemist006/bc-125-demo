
CREATE DATABASE IF NOT EXISTS Checkr;

USE Checkr;


CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45),
    email VARCHAR(45),
    password VARCHAR(45)
);


CREATE TABLE candidate (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45),
    adjudication ENUM('ENGAGE', 'ADVERSE_ACTION','UNSPECIFIED'),
    status ENUM('CLEAR', 'CONSIDER'),
    location VARCHAR(45),
    event_date DATE
);

CREATE TABLE candidate_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT,
    email VARCHAR(45),
    dob DATE,
    phone_number VARCHAR(45),
    zipcode VARCHAR(45),
    social_security VARCHAR(45),
    driver_license VARCHAR(45),
    created_at DATETIME,
    updated_at DATETIME,
    package VARCHAR(45),
    report_created_at DATETIME,
    report_completion_date DATETIME,
    turn_around_time DATETIME,
    FOREIGN KEY (candidate_id) REFERENCES candidate(id)
);


CREATE TABLE court_search (
    id INT AUTO_INCREMENT PRIMARY KEY,
    search VARCHAR(45),
    status ENUM('clear', 'consider', 'scheduled'),
    event_date DATE,
    candidate_id INT,
     created_at DATETIME,
    updated_at DATETIME,
    FOREIGN KEY (candidate_id) REFERENCES candidate(id)
);


CREATE TABLE adverse_action (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45),
    action_status ENUM('clear', 'consider', 'scheduled'),
    pre_notice_date DATE,
    post_notice_date DATE,
    candidate_id INT,
    created_at DATETIME,
    updated_at DATETIME,
    FOREIGN KEY (candidate_id) REFERENCES candidate(id)
);