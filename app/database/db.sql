CREATE TABLE board (
  id SERIAL PRIMARY KEY,
  board_id varchar NOT NULL UNIQUE,
  name varchar NOT NULL,
  date varchar NOT NULL,
  permission varchar NOT NULL,
  owner varchar NOT NULL
);

CREATE TABLE account (
  id SERIAL PRIMARY KEY,
  email varchar UNIQUE NOT NULL ,
  password varchar NOT NULL,
  first_name varchar NOT NULL,
  last_name varchar NOT NULL
);

CREATE TABLE card (
  id SERIAL PRIMARY KEY,
  board_id varchar NOT NULL,
  card_id varchar NOT NULL,
  content varchar,
  category varchar NOT NULL,
  owner varchar NOT NULL,
  matrix JSON NOT NULL,
  CONSTRAINT fk_card
    FOREIGN KEY (board_id)
      REFERENCES board(board_id) 
      ON DELETE CASCADE
);
