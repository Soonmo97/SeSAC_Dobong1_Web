const express = require('express');
const app = express();
const PORT = 8080;

// ejs set
app.set('view engine', 'ejs');
app.set('views', './views');

// body-parser 미들웨어 등록 (request.body)
app.use(express.urlencoded({ extended: true })); // ture, false 상관없음 기능차이
app.use(express.json()); //json 형식으로 데이터를 주고 받음

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/getForm', (req, res) => {
  console.log(req.query);
  // res.send('데이터 잘 받았습니다.');
  res.render('result', {
    title: 'GET',
    userInfo: req.query, // {id: '', email: '', pw: '',};
    // res.render('뷰', {보내줄 데이터});
  });
});

// 실습
// /practice1
// /practice2
app.get('/practice1', (req, res) => {
  res.render('practice/practice1');
});
app.get('/practice2', (req, res) => {
  res.render('practice/practice2');
});

app.get('/practice', (req, res) => {
  res.render('/practice/practiceResult', {
    userInfo: req.query,
    addInfo: false,
  });
});

app.post('/postForm', (req, res) => {
  // post 요청은 request.body에 담겨져 옵니다.
  console.log(req.body);
  // res.send(`
  // <ul>
  //   <li>${req.body.id2}</li>
  //   <li>${req.body.pw2}</li>
  // </ul>
  // `);
  console.log('안녕하세요~');
  res.render('result', {
    title: 'POST',
    userInfo: req.body, //{id: '', email: '', pw: ''}
  });
});

app.post('/practice', (req, res) => {
  console.log(req.body);
  const postInfo = req.body;
  res.render('practice/practiceResult', {
    userInfo: postInfo,
    addInfo: true,
  });
});

app.post('/js-form-check', (req, res) => {
  console.log(req.body);
  res.send('Validation 응답');
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
