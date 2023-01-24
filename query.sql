-- Active: 1673703055127@@127.0.0.1@2311@latihan
CREATE TABLE
    category(
        id_category SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL
    );

CREATE TABLE
    checkout(
        id_checkout SERIAL PRIMARY KEY,
        transaction_id INT REFERENCES transactions(id_transaction),
        product_id INT REFERENCES products(id_product),
        status_id INT REFERENCES status(id_status)
    );

CREATE TABLE
    products (
        id_product SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        stock INT NOT NULL,
        price INT NOT NULL,
        photo VARCHAR,
        brand VARCHAR,
        description VARCHAR,
        category_id INT REFERENCES category(id_category),
        user_id VARCHAR REFERENCES users(id_user)
    );

ALTER TABLE transactions DROP COLUMN email;
ALTER TABLE transactions ADD COLUMN email VARCHAR;

CREATE Table users (
    id_user VARCHAR PRIMARY KEY,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    fullname VARCHAR,
    role VARCHAR,
    date VARCHAR,
    gender VARCHAR,
    address VARCHAR
);


CREATE TABLE
    transactions(
        id_transaction SERIAL PRIMARY KEY,
        email VARCHAR NOT NULL,
        product_id INT REFERENCES products(id_product),
        amount INT NOT NULL,
        total INT NOT NULL,
        status INT REFERENCES status(id_status)
    );

CREATE TABLE
    status(
        id_status SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL
    );

DROP TABLE products;
DROP TABLE transactions;
DROP TABLE category;
DROP TABLE checkout;
DROP TABLE status;


INSERT INTO category(id,name) VALUES(1,'nasi'),(2,'roti');

INSERT INTO
    products(name, stock, price, category_id, photo, brand)
VALUES ('Baju 3Second', 12, 19000, 1, 'alvin', 'Outfit Store');

INSERT INTO payment_status(id,name) VALUES(1,'unpaid');

INSERT INTO payment_status(id,name) VALUES(2,'paid');

INSERT INTO
    transactions(
        id,
        email,
        products_id,
        amount,
        total,
        status
    )
VALUES (1, 'wow@pijar.id', 1, 2, 30000, 1);

SELECT
    products.name,
    products.stock,
    products.price,
    category.name as category
FROM products
    INNER JOIN category ON products.category_id = category.id;

SELECT
    transactions.email,
    products.name as products_name,
    transactions.amount,
    products.price,
    transactions.total,
    payment_status.name as status
FROM transactions
    JOIN products ON transactions.products_id = products.id
    JOIN payment_status ON transactions.status = payment_status.id;

UPDATE transactions SET status=2 WHERE id=1;

ALTER TABLE category ADD photo VARCHAR;

DELETE TABLE products;

-- many to many --

CREATE TABLE
    tag (
        id SERIAL PRIMARY KEY,
        tag_value TEXT
    )
CREATE TABLE
    products_tag (
        products_id INT tag_id INT PRIMARY KEY (products_id, tag_id) CONSTRAINT fk_products FOREIGN KEY(products_id) REFERENCES products(id) CONSTRAINT fk_tag FOREIGN KEY(tag_id) REFERENCES tag(id)
    )
    
SELECT
    products.name,
    products.stock,
    products.price,
    category.name as category
FROM products
    INNER JOIN category ON products.category_id = category.id
WHERE id = 1 


DROP TABLE product CASCADE;


INSERT INTO users(id,email,password,fullname,role) VALUES('1','ean@ean.id','123456','ean ean','admin');

SELECT * FROM users where email='alvinjamalazkya@gmail.com';

ALTER TABLE products ADD photo VARCHAR(255);
