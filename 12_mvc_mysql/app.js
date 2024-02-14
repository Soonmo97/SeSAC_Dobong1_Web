const express = require('express');
const app = express();
const PORT = 8080;

// middleware
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
const indexRouter = require('./routes');
app.use('/', indexRouter);
// const indexRotuer = require('./rotues/index');

// 404 error
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
