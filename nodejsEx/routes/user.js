const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("안녕! 난 user router야");
});

router.get('/user/:id', (req, res) => {
    console.log(req.params, req.query);
    res.send(`<p>user ${req.params.id} page </p>`);

});

router.get('/abc', (req, res) => {
    res.send("abc로 Get 보냈음");
});

router.post('/abc', (req, res) => {
    res.send("abc로 Post 보냈음");
});

router.route('/abc2')
.get((req, res) => {
    res.send("abc2로 Get 보냈음");
})
.post((req, res) => {
    res.send("abc2로 Post 보냈음");
});


module.exports = router;
