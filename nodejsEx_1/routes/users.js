const express = require('express');
const User = require('../models/user');
const Comment = require('../models/comment');

const router = express.Router();

router.route('/')
  .get(async(req, res, next) => {
    try {
        const users = await User.findAll();
        res.json(users);
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
  })
  .post(async (req, res, next) => {
    try {
        console.log("여기 살려주세")
        console.log("req.body.name:", req.body);
        const user = await User.create({
            name: req.body.name,
            age: req.body.age,
            married: req.body.married
        });
        console.log(user);
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.get('/:id/comments', async (req, res, next) => {
    try {
        const comments = await Comment.findAll({
            include: {
                model: User,
                where: { id: req.params.id },
            },
        });
        console.log(comments);
        res.json(comments);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;