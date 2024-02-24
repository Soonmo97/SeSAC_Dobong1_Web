const models = require('../models');
const encrypt = require('../util/bcrypt');

exports.main = (req, res) => {
  const user = req.session.user;
  if (user) {
    res.render('index', { isLogin: true, user: user });
  } else {
    res.render('index', { isLogin: false });
  }
};

exports.get_login = (req, res) => {
  res.render('login', { isLogin: false });
};

exports.get_register = (req, res) => {
  res.render('register', { isLogin: false });
};

exports.post_register = (req, res) => {
  const { userid, name, pw } = req.body;
  const encryptPw = encrypt.hashPW(pw);
  models.User.create({
    userid,
    name,
    pw: encryptPw,
  }).then((result) => {
    console.log('생성된 회원 >>', result);
    res.send(result);
  });
};

exports.post_login = (req, res) => {
  const { userid, pw } = req.body;
  models.User.findOne({
    where: {
      userid,
    },
  }).then((result) => {
    if (result) {
      if (encrypt.comparePW(pw, result.pw)) {
        req.session.user = userid; // 세션 설정
        res.send(true);
      } else {
        res.send(false);
      }
    } else {
      res.send(false);
    }
  });
};

exports.post_profile = (req, res) => {
  models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  }).then((result) => {
    res.render('profile', { isLogin: true, data: result });
  });
};

exports.logout = (req, res) => {
  const user = req.session.user;
  if (user) {
    // 로그인 된 회원 >> logout 시켜주기
    req.session.destroy((err) => {
      if (err) throw err;
    });
    res.redirect('/'); // 로그아웃 종료 후 홈으로
  } else {
    // 세션 만료된 회원
    res.send(`
        <script>
          alert('이미 세션이 만료되었습니다.');
          document.location.href='/';
        </script>
    `);
  }
};
