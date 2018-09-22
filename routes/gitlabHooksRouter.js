var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // X-Gitlab-Event: Merge Request Hook
    // X-Gitlab-Token
    res.send('gitlab hooks');
});


router.get('/test', function(req, res, next) {
    res.send({ user: 'tobi' });
});



router.post('/',function(req,res){
    console.log(req.body);
    // res.send('/');
    res.set('Content-Type', 'application/json');
    res.send(req.body);
});

module.exports = router;
