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
    console.log('X-Gitlab-Event', req.headers['X-Gitlab-Event']);
    res.send(req.body);
    if (req.body['object_kind'] === 'merge_request') {
        const objectAttributes = req.body['object_attributes'];

        console.log('source_branch', objectAttributes['source_branch']);
        console.log('source_url', objectAttributes['source']['url']);
        console.log('target_branch: ', objectAttributes['target_branch']); //": "master",
        console.log('state: ', objectAttributes['state']); //": "opened",
        console.log('merge_status: ', objectAttributes['merge_status']); //": "unchecked",
        console.log('work_in_progress: ', objectAttributes['work_in_progress']); //": false,
        console.log('action: ', objectAttributes['action']); //": "open",
    }
});

module.exports = router;
