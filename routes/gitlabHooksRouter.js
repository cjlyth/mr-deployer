var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // X-Gitlab-Event: Merge Request Hook
    // X-Gitlab-Token
    res.send('gitlab hooks');
});

app.post('/',function(request,response){
    console.log(request.body);
});

module.exports = router;
