CREATE TABLE shopping_list (
	id SERIAL UNIQUE PRIMARY KEY,
	name VARCHAR(40),
	price REAL
);

INSERT INTO shopping_list (name, price)
VALUES ('1lb Apples', 1.99);

INSERT INTO shopping_list (name, price)
VALUES ('Yogurt', .98);