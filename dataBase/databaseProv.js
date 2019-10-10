const mysql2 = require ('mysql2');

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'lundb'
})

module.exports = pool;