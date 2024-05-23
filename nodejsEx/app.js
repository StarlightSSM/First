const express = require("express");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
    console.log("모든 요청에 응답한대요.");
    next(); // 다음으로 제어를 넘겨 중
});

app.get('/', (req, res) => {
    res.send('Hello, Express야! 반가워!');
});

app.get("/html", (req, res) => {
    //res.send("html page입니다.");
    res.sendFile(path.join(__dirname, '/res_html.html'));
});

app.get("/myerror", (req, res, next) => {
    console.log("일부러 에러 나는 실험 중");
    next();
}, (req, res) => {
    throw new Error("에러 발생!!!");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
    console.log("서버가 잘 실행되었어요.");
});