const Comment = require('../model/Comment');
/*
controller 에서는 model에서 받은 데이터를 가공해서
view에 전달할 수 있어요
*/

// localhost:8080/

exports.main = (req, res) => {
  res.render('index');
};
// router.bet('/', (req, res) => {
// res.render('index');
// });

//  GET /comments
exports.comments = (req, res) => {
  console.log(Comment.commentsInfo());
  res.render('comments', { commentInfo: Comment.commentsInfo() });
};
// router.get('/comments', (req, res) => {
//   console.log(comments);
//   res.render('comments', { commentInfo: comments });
// });

// GET /comment/:id (params 사용) >> comments.ejs
exports.comment = (req, res) => {
  console.log(req.params); // { id: '1' }
  const commentId = req.params.id; // 1, 2, 3, 4
  // if (commentId <= 1 || commentId > comments.length) {
  //   return res.render('404');
  // }

  // if (isNaN(commentId)) {
  //   return res.render('404');
  // }

  // 한 번에 처리
  if (!Comment.commentsInfo()[commentId - 1]) return res.render('404');

  res.render('comment', { commentInfo: Comment.commentsInfo()[commentId - 1] });
};
// router.get('/comment/:id', (req, res) => {
//   console.log(req.params); // { id: '1' }
//   const commentId = req.params.id; // 1, 2, 3, 4
//   // if (commentId <= 1 || commentId > comments.length) {
//   //   return res.render('404');
//   // }

//   // if (isNaN(commentId)) {
//   //   return res.render('404');
//   // }

//   // 한 번에 처리
//   if (!comments[commentId - 1]) return res.render('404');

//   res.render('comment', { commentInfo: comments[commentId - 1] });
// });
