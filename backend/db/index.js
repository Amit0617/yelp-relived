require('dotenv').config()
const mariadb = require('mariadb')
const fs = require('fs');
const axios = require('axios');

const serverCert = fs.readFileSync("db/skysql_chain.pem", "utf8");

let pool;

async function getIp() {
    const response = await axios.get('https://ifconfig.me')
    console.log(response.data);

}

try {
    
    console.log("heloo", getIp())
    pool = mariadb.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        ssl: { ca: serverCert },
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
    });

    pool.getConnection()
        .then(conn => {
            console.log("connected ! connection id is " + conn.threadId);
            conn.release(); //release to pool
        })
        .catch(err => {
            console.log("not connected due to error: " + err);
        });
}
catch (error) {
    console.error(error)
    // callDatabase();
}

//Export it for server
module.exports = Object.freeze({
    pool: pool
});
