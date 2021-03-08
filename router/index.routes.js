const express = require('express');
const router = express.Router();

const articleRoute = require("./articles.routes")

router.use('/articles',articleRoute)

module.exports = router;