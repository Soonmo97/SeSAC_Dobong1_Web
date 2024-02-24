const experss = require('express');
const app = experss();
const dotenv = require('dotenv').config;
const session = require('express-session');
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(experss.urlencoded({ extended: true }));
app.use(experss.json());
app.use('/static', experss.static(__dirname + '/static'));
app.use(
  session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 10, // 10분 뒤 세션 종료
      httpOnly: true,
    },
  })
);

const indexRouter = require('./routes');
const db = require('./models');
app.use('/', indexRouter);

// 404 error
app.get('*', (req, res) => {
  res.render('404');
});

db.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('db sync error >>', err);
  });
