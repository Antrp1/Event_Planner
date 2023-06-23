DROP DATABASE IF EXISTS thestore_db;
CREATE DATABASE thestore_db;

USE thestore_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL,
    stock BIT,
    category VARCHAR(30)
)

