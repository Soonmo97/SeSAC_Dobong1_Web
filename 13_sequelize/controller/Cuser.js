// TODO: 컨트롤러 코드
const models = require('../models');
// GET /user/signin
exports.get_signin = (req, res) => {
  res.render('signin');
};

// GET /user/signup
exports.get_signup = (req, res) => {
  res.render('signup');
};

// POST /user/signup
// 회원가입 요청
exports.post_signup = (req, res) => {
  console.log('controller', req.body); // {userid, pw, name}
  // User.post_signup(req.body, () => {
  //   res.end();
  // });
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log('create >> ', result);
    console.log(result.id);
    res.end();
  });
};

// POST /user/signin
// 로그인
exports.post_signin = (req, res) => {
  console.log('controller', req.body);
  // {userid, pw}
  // User.post_signin(req.body, (result) => {
  //   console.log('controller', result);
  //   // 로그인 성공 시, true
  //   // 로그인 실패 시, false
  //   if (result.length > 0) {
  //     // res.send({isLogin:true, userInfo:result[0]});
  //     res.send(true);
  //   } else {
  //     res.send(false);
  //   }
  // });
  // findOne은 LIMIT 없어도 ok
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    // result: findOne을 이용해서 찾은 결과를 반환 or
    // 데이터를 못찾았다면 null 반환
    console.log('로그인 요청', result);
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

// POST /user/profile
// 프로필 페이지 요청
exports.post_profile = (req, res) => {
  console.log('req.body', req.body);
  // {userid}
  // User.post_profile(req.body.userid, (result) => {
  //   console.log(result); // {id, userid, name, pw}
  //   res.render('profile', { data: result });
  // });
  models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  }).then((result) => {
    console.log(result);
    res.render('profile', { data: result });
  });
};

// POST /user/profile/edit
// 회원 정보 수정
exports.edit_profile = (req, res) => {
  console.log('req.body', req.body);

  // User.edit_profile(req.body, () => {
  //   res.end();
  // });
  models.User.update(
    {
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log('회원 정보 수정', result);
    // [1] or [0]
    // 수정 성공, 수정 실패
    // where 조건에 해당하는 레코드를 못찾았을 때 실패!
    res.end();
  });
};

// POST /user/profile/delete
// 회원 정보 삭제
exports.delete_profile = (req, res) => {
  console.log('req.body', req.body);

  // User.delete_profile(req.body.id, () => {
  //   res.end();
  // });
  models.User.destroy({
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log('회원 정보 삭제', result);
    // 1 : 삭제 성공
    // 0 : 삭제 실패
    res.end();
  });
};
