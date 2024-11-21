//const mysql = require('mysql2');
const dotenv = require('dotenv');
const AWS = require("../aws/modules");

dotenv.config();

async function doQuery (query, parameters) {  
  const awsRegion = process.env.AWS_REGION;
  const dbSecretName = process.env.DB_SECRET_NAME;
  var secretValue = await AWS.SecretsManager.getSecret(dbSecretName, awsRegion);

  var secret = JSON.parse(secretValue)
    
  const mysql = require('mysql2/promise');
  const conn = await mysql.createConnection({
    host: secret.DB_HOST,
    user: secret.DB_USER,
    password: secret.DB_PWD,
    database: secret.DB_NAME    
  });  

  let [rows, fields] = await conn.execute(query, parameters);  
  return rows;
}

module.exports = {
  doQuery,
};

