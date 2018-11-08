const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.json('test ok desde heroku');
});


module.exports = router;