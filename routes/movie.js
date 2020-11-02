const express = require('express');
const router = express.Router();
const imdb = require('imdb-api');

/* GET movie */
router.post('/', function (req, res, next) {
    const body = req.body;
    const movieName = body.movieName;

    imdb.get({ name: `${movieName}` }, { apiKey: process.env.OMDB_KEY, timeout: 30000 })
        .then((response) => {
            res.json({ response });
        })
        .catch(console.log);
});

module.exports = router;
