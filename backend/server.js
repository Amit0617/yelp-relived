require('dotenv').config()
const express = require('express')
const db = require('./db')

const morgan = require('morgan');
const { pool } = require('./db');
const app = express();

//middleware
app.use(express.json())

//Routes
//List all restaurants
app.get('/api/v1/restaurants', async(req,res) =>{
    let conn;
    try {
        const result = await db.pool.query("select * from restaurants");
        res.send(result);
    } catch (err) {
        throw err;
    } finally {
        if (conn)
            return conn.release();
    }
})

// const port = 3001
const port = process.env.PORT||3001
app.listen(
    port, 
    () => console.log(`server listening on port ${port}`))