const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.json('test ok desde heroku master branch');
});


module.exports = router;