const User = require('../model/User');

exports.user = (req, res) => {
  console.log(req.body);
  console.log(User.userInfo());
  const { id: reqId, pw: reqPw } = req.body;
  if (reqId === User.userInfo().id && reqPw === User.userInfo().pw) {
    res.send({
      userInfo: req.body,
      // ...req.body
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
};

exports.user2 = (req, res) => {
  // console.log(req.body);
  // console.log(User.user);
  const { id: reqId, pw: reqPw } = req.body;
  const userList = User.user.split('\n'); // userInfo = ['abcd//1234//사과사과', '...', '...']
  // console.log(userList);
  const userInfo = [];
  for (let user of userList) {
    userInfo.push({
      id: user.split('//')[0],
      pw: user.split('//')[1],
      name: user.split('//')[2],
    });
  }
  let result = false;
  let resultUser = {};
  for (let i = 0; i < userInfo.length; i++) {
    if (reqId === userInfo[i].id && reqPw === userInfo[i].pw) {
      result = true;
      resultUser = userInfo[i];
    }
  }
  console.log(resultUser);

  if (result) res.send({ userInfo: resultUser, isSuccess: true });
  else res.send({ isSuccess: false });
  // console.log(userInfo);
};
// app.post('/axiosPost', (req, res) => {
//   // const id = 'soon';
//   // const pw = '1234';
//   console.log(req.body);
//   const { id: reqId, pw: reqPw } = req.body;
//   if (reqId === id && reqPw === pw) {
//     res.send({
//       userInfo: req.body,
//       // ...req.body
//       isSuccess: true,
//     });
//   } else {
//     res.send({ isSuccess: false });
//   }
// });
