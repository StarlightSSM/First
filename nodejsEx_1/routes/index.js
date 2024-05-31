const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        const users = await User.findAll();
        res.render('sequelize', {users});
        // if (cache{name} == 'testUserID') {
        //     // 응답 페이지 회원 가입 되어 있음.
        // } else {
        //     const user = User.findAll(
        //         {where:{name:'testUserID'}}
        //     )
        // }
    } catch(err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
