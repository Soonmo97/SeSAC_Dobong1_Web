const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

// body 정보 미들웨어
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// ajax 라우팅
app.get('/ajax', (req, res) => {
  console.log(req.query);
  // res.send({
  //   name: req.query.name,
  //   gender: req.query.gender,
  // });
  res.send(req.query);
});

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios
app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/axios', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// fetch
app.get('/fetch', (req, res) => {
  console.log(req.query);
  // res.send('fetch 응답 완료');
  res.send(req.query);
});

app.post('/fetch', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// open api 사용
app.get('/open-api', (req, res) => {
  res.render('api');
});

// axios get 실습
app.get('/axios-get', (req, res) => {
  res.render('axiosGet');
});

app.get('/axiosGet', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// axios post 실습
app.get('/axios-post', (req, res) => {
  res.render('axiosPost');
});

app.post('/axiosPost', (req, res) => {
  const id = 'soon';
  const pw = '1234';
  console.log(req.body);
  const { id: reqId, pw: reqPw } = req.body;
  if (reqId === id && reqPw === pw) {
    res.send({
      userInfo: req.body,
      // ...req.body
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
