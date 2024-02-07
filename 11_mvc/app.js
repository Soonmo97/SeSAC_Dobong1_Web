const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  const indexRouter = require('./routes/index');
const indexRouter = require('./routes');
// localhost:8080/ 경로를 기본으로 하는 경로는
// indexRouter에서 처리
app.use('/', indexRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
