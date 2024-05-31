const express = require("express");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const indexRouter = require('./routes'); // routes 폴더의 index.js
const userRouter = require('./routes/user');  // routes 폴더의 user.js
const nunjucksHomeRouter = require('./routes/nunhome');
const nunjucksUserRouter = require('./routes/nunuser');

dotenv.config(); // .env 파일 내용 적용
const app = express();
app.set('port', process.env.PORT || 3000);
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/nunHome', nunjucksHomeRouter);
app.use('/nunUser', nunjucksUserRouter);

// nunjucks
const nunjucks = require('nunjucks');
app.set('view engine', 'html');
nunjucks.configure('views', {express:app, watch:true});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.use(morgan('dev'));
app.use("/", express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.raw());
app.use(express.text());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.get("/cookie_reset", (req, res) => {
    res.clearCookie("username", "suminshin211", {
        httpOnly: true, secure: true, signed: true
    });
    res.send("cookie를 초기화했습니다.");
});
app.get("/cookie_set", (req, res) => {
    res.cookie("username", "suminshin211", {
        expires: new Date(Date.now()+30000),
        httpOnly: true, secure: true, signed: true
    });
    res.cookie("nickname", "starlightSSM");
    res.send("cookie를 세팅했습니다.");
});

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));

// multer 이미지 업로드
const multer = require('multer');
const fs = require('fs');
try {
    fs.readdirSync('uplodas');
} catch(error) {
    console.error('uploads 폴더가 없어 새로 생성합니다.');
    fs.mkdirSync('uploads');
}
const upload = multer({
        storage: multer.diskStorage({
            destination(req, file, done) {
                done(null, 'uploads/');
            },
            filename(req, file, done) {
                const ext = path.extname(file.originalname);
                done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            },
        }), // 저장할 곳
        limits: {fileSize: 5 * 1024 * 1024}, // 한계 용량 설정 5MB
    }
);

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart.html'));
});

app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file, req.body);
    res.send('업로드 완료!');
});

app.get('/upload2', (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart2.html'));
});

app.post('/upload2', upload.array('many'), (req, res) => {
    console.log(req.file, req.body);
    res.send('업로드 완료!');
});

app.get('/upload3', (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart3.html'));
});

app.post('/upload3', upload.fields([{name: 'image1'}, {name: "image2"}]), (req, res) => {
    console.log(req.files, req.body);
    res.send('업로드 완료!');
});

app.get('/upload4', (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart4.html'));
});

app.post('/upload4', upload.none(), (req, res) => {
    console.log(req.body);
    res.send('업로드 완료!');
});
// ----------------------------------------------------------
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