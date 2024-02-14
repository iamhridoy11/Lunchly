/** Database for lunchly */

const pg = require("pg");


DB_URI = "lunchly";


let db = new pg.Client({
  host: "/var/run/postgresql",
  database: DB_URI
});



db.connect();

module.exports = db;
