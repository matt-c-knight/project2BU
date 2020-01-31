DROP DATABASE IF EXISTS codetab_db;
CREATE DATABASE codetab_db;

CREATE TABLE tag(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  parent_id INT Null
  PRIMARY KEY (id)
);