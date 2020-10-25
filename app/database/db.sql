CREATE TABLE board (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  date varchar,
  owner varchar NOT NULL
);

CREATE TABLE user (
  id SERIAL PRIMARY KEY,
  email varchar UNIQUE NOT NULL ,
  password varchar NOT NULL,
  name varchar NOT NULL
);

CREATE TABLE card (
  id SERIAL PRIMARY KEY,
  board_id INT NOT NULL,
  content varchar,
  category varchar NOT NULL,
  owner varchar NOT NULL
)