CREATE TABLE board (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  date varchar,
  owner varchar NOT NULL
);

CREATE TABLE account (
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
  owner varchar NOT NULL,
  CONSTRAINT fk_card
    FOREIGN KEY (board_id)
      REFERENCES board(id) 
      ON DELETE CASCADE
);

INSERT INTO board (name, date, owner)
VALUES 
  ('HEL-1', '2020-10-21', 'demo@gmail.com'),
  ('HEL-2', '2020-10-22', 'demo@gmail.com'),
  ('HEL-3', '2020-10-28', 'demo1@gmail.com'),
  ('HEL-4', '2020-10-24', 'demo1@gmail.com')