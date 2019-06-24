const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');

router.post('/signup', function(req, res, next) {
    const user  = [
        req.body.email,
        req.body.password,
        req.body.name,
        req.body.lastname
    ];

    connection.query(
        'INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)', 
        user, 
        function (error, results, fields) {
            if(error) {
                console.log("error", error)
                res.status(500).end();
            }
            res.end();
        }
    );
});

module.exports = router;