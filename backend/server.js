require('dotenv').config()
const express = require('express')
// const db = require('./db')
const { pool } = require('./db');

const morgan = require('morgan');

const app = express();

//middleware
app.use(express.json())

//Routes
//List all restaurants
app.get('/api/v1/restaurants', async(req,res) =>{
    let conn;
    try {
        const result = await pool.query("select * from restaurants");
        // res.send(result);
        // send object with status and length of response
        res.send({
            status: "success",
            count: result.length,
            data: {
                restaurants: result
            }
        })
    } catch (err) {
        throw err;
    } finally {
        if (conn)
            return conn.release();
    }
})

// Get restaurant on given id
app.get("/api/v1/restaurants/:id", async(req,res)=>{
    console.log(req.params.id);
    let conn;
    try {
        const result = await pool.query("select * from restaurants where id = ?", [req.params.id]);
        // res.send(result);
        // send object with status and length of response
        res.send({
            status: "success",
            count: result.length,
            data: {
                restaurants: result
            }
        })
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