const express = require("express");
const path = require('path');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');
const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');

const app = express();
app.set('port', process.env.PORT || 3001);
app.set('view engine', 'html');
nunjucks.configure('views', {express:app, watch:false});
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// router 부분
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);

app.use("/", express.static(path.join(__dirname, 'public')));

sequelize.sync({force: true})
.then(() => {
    console.log("데이터베이스 연결 성공!!");
})
.catch((err) => {
    console.error(err);
});

app.listen(app.get("port"), () => {console.log("서버 실행 중")});

