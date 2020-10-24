const { Pool } = require("pg");

const pool = new Pool({
  user: "tanphat",
  host: "localhost",
  database: "funretro",
  password: "123",
  port: 5432,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
