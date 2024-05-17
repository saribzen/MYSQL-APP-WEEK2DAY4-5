const mysql = require('mysql2/promise')


const qr = async (query: String, params: Array<String>) => {
    const pool = await mysql.createPool({
      host: process.env.DBHOST,
      user: process.env.DBUSER,
      password: process.env.DBPASS,
      database: process.env.DBNAME
    });
    
    const [rows, fields] = await pool.query(query, params);
    // console.log(rows);
    return rows;
  }


module.exports = {
  qr
};

