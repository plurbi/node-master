const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.json('test ok desde heroku -> master-prod branch');
});


module.exports = router;