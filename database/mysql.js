//const mysql = require('mysql2');
const dotenv = require('dotenv');

async function doQuery (query, parameters) {
  const mysql = require('mysql2/promise');
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME    
  });  

  let [rows, fields] = await conn.execute(query, parameters);  
  return rows;
}

module.exports = {
  doQuery,
};

