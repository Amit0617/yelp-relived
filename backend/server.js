require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const cors = require('cors')
// const db = require('./db')
const { pool } = require('./db');

const morgan = require('morgan');

const app = express();

//middleware
app.use(cors())

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Routes
//List all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
    let conn;
    try {
        const result = await pool.query("select * from restaurants");
        // res.send(result);
        // send object with status and length of response
        res.status(200).json({
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
app.get("/api/v1/restaurants/:id", async (req, res) => {
    console.log(req.params.id);
    let conn;
    try {
        const result = await pool.query("select * from restaurants where id = ?", [req.params.id]);
        // res.send(result);
        // send object with status and length of response
        res.status(200).json({
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

// Create a restaurant 
app.post("/api/v1/restaurants", upload.none(), async (req, res) => {
    console.log(req.body);
    let conn;
    try {
        const result = await pool.query("insert into restaurants(name, location, price_range) values(?, ?, ?) returning *;",
            [req.body.name, req.body.location, req.body.price_range]);
        // res.send(result);
        // send object with status and length of response
        res.status(200).json({
            status: "success",
            count: result.length,
            data: {
                restaurant: result
            }
        })
    } catch (err) {
        throw err;
    } finally {
        if (conn)
            return conn.release();
    }
})

// Update restaurant
app.put("/api/v1/restaurants/:id", upload.none(), async (req, res) => {
    let conn;
    try {
        let result
        await pool.query("update restaurants set name=?, location=?, price_range=? where id=?;",
            [req.body.name, req.body.location, req.body.price_range, req.params.id])
            .then(async () => {
                result = await pool.query('select * from restaurants where id=?', [req.params.id])
            });

        // res.send(result);
        // send object with status and length of response
        res.status(200).json({
            status: "success",
            count: result.length,
            data: {
                restaurant: result
            }
        })
    } catch (err) {
        throw err;
    } finally {
        if (conn)
            return conn.release();
    }
})

// DELETE restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    let conn;
    try {
        await pool.query("delete from restaurants where id=?;", [req.params.id]);
        // res.send(result);
        // send object with status
        res.status(204).json()
    } catch (err) {
        throw err;
    } finally {
        if (conn)
            return conn.release();
    }
})

// const port = 3001
const port = process.env.PORT || 3001
app.listen(
    port,
    () => console.log(`server listening on port ${port}`)
)