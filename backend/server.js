require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const cors = require('cors')
// const db = require('./db')
const { pool } = require('./db');

// const morgan = require('morgan');

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
        const result = await pool.query("select * from restaurants left join (select restaurant_id, Cast(AVG(ratings) AS DECIMAL(5,1)) AS avg_rating, count(ratings) AS rating_count from reviews)reviews on restaurants.id=restaurant_id;");
        // res.send(result);
        // send object with status and length of response
        res.send(JSON.stringify({
            status: "success",
            count: result.length,
            data: {
                restaurants: result
            }
        }, (key, value) =>
            typeof value === "bigint" ? Number(value) : value
        ))
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
        const restaurants = await pool.query("select name from restaurants where id = ?", [req.params.id]);
        const reviews = await pool.query('select * from reviews where restaurant_id = ?', [req.params.id])
        const ratings = await pool.query("select Cast(AVG(ratings) AS DECIMAL(10,1)) AS avg_rating, count(ratings) AS rating_count from reviews where restaurant_id=?", [req.params.id])
        // res.send(result);
        // send object with status and length of response
        res.send(JSON.stringify({
            status: "success",
            count: reviews.length,
            data: {
                restaurants,
                reviews,
                ratings
            }
        }, (key, value) =>
            typeof value === "bigint" ? Number(value) : value
        ))
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

// Add a review
app.post("/api/v1/restaurants/:id/addReview", upload.none(), async (req, res) => {
    console.log(req.body);
    let conn;
    try {
        const result = await pool.query("insert into reviews(restaurant_id, name, ratings, reviews) values(?, ?, ?, ?) returning *;",
            [req.body.restaurant_id, req.body.name, req.body.ratings, req.body.reviews]);
        // res.send(result);
        // send object with status and length of response
        res.status(201).json({
            status: "success",
            count: result.length,
            data: {
                review: result
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
const port = process.env.PORT || 3001
const server = app.listen(
    port,
    () => console.log(`server listening on port ${port}`)
)
// server();

// process.on('SIGTERM', () => {
//     debug('SIGTERM signal received: closing HTTP server')
//     server.close(() => {
//         debug('HTTP server closed')
//     })
// })

// process.on('SIGINT', () => {
//     debug('SIGINT signal received: closing HTTP server')
//     server.close(() => {
//         debug('HTTP server closed')
//     })
// })