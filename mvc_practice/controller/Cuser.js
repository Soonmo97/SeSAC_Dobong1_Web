const User = require('../model/User');
const user = User.userInfo();

exports.user = (req, res) => {
  console.log(req.body);
  console.log(user);
  const { id: reqId, pw: reqPw } = req.body;
  if (reqId === user.id && reqPw === user.pw) {
    res.send({
      userInfo: req.body,
      // ...req.body
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
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
