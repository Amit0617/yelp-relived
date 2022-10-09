require('dotenv').config()
const mariadb = require('mariadb')
const fs = require('fs');

const serverCert = fs.readFileSync("db/skysql_chain.pem", "utf8");

let pool;

// async function callDatabase() {

    try {
        pool = mariadb.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            ssl: { ca: serverCert },
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            // multipleStatements: true,
            // connectionLimit: 5
        });

        pool.getConnection()
            .then(conn => {
                console.log("connected ! connection id is " + conn.threadId);
                conn.release(); //release to pool
            })
            .catch(err => {
                console.log("not connected due to error: " + err);
            });

        // await pool.execute('select * from restaurants;')
    } catch (error) {
        console.error(error)
    }
// }

// callDatabase()


//Export it for server
module.exports = Object.freeze({
    pool: pool
});