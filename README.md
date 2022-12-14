# yelp-relived

### Setting up database
#### Creating a user for database access specifically
```sql
CREATE USER yelpuser@localhost IDENTIFIED BY PASSWORD '*F99D7220E8A739AB281D53045C98467445CE4DBE';
```
where above password hash was generated by `SELECT PASSWORD('yelpPassword');`

>Confirm created user by: `SELECT USER FROM mysql.user;`

#### Creating a database
```sql
CREATE DATABASE yelp;
```
>List databases by: `SHOW DATABASES;`

#### Creating a table within database
```sql
CREATE TABLE restaurants(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range > 0 AND price_range <= 5)
);
```
>`DESCRIBE restaurants;`

#### Adding rows into table
```sql
INSERT INTO restaurants(name, location, price_range) VALUES('Baba Ka Dhaba', 'Delhi', 1); --By root user
```
#### Granting permissions to the created user
```sql
GRANT SELECT ON yelp.* TO yelpuser@localhost IDENTIFIED BY PASSWORD '*F99D7220E8A739AB281D53045C98467445CE4DBE';--By root user
```
>`SHOW GRANTS FOR yelpuser@localhost;`  
>Also can be verified by logging into mysql/mariadb console by yelpuser

```sql
GRANT INSERT ON yelp.* TO yelpuser@localhost IDENTIFIED BY PASSWORD '*F99D7220E8A739AB281D53045C98467445CE4DBE';
```
```sql
GRANT UPDATE ON yelp.restaurants TO yelpuser@localhost IDENTIFIED BY PASSWORD '*F99D7220E8A739AB281D53045C98467445CE4DBE';
```
```sql
GRANT DELETE ON yelp.restaurants TO yelpuser@localhost IDENTIFIED BY PASSWORD '*F99D7220E8A739AB281D53045C98467445CE4DBE';
```

#### Inserting more rows but now as yelpuser
```sql
INSERT INTO restaurants(name, location, price_range) VALUES('Haldirams', 'Delhi', 4);
```
#### Creating a new table for reviews for restaurants
```sql
CREATE TABLE reviews(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    restaurant_id INT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    reviews TEXT NOT NULL,
    ratings INT NOT NULL check(ratings > 0 AND ratings <= 5)
);
```
#### Inserting rows into reviews
```sql
INSERT INTO reviews(restaurant_id, name, ratings, reviews) VALUES(1, 'Rakesh', 2, 'OK OK');
```