const Visiotor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  // visitor.ejs에 데이터 보내주기
  // [DB 연결 전, 임시 데이터베이스]
  // console.log(Visiotor.getVisitors()); //[{}, {}]
  // res.render('visitor', {
  //   data: Visiotor.getVisitors(),
  // });
  // [DB 연결 후]
  Visiotor.getVisitors((result) => {
    console.log('Cvisitor.js 전체목록::', result);
    res.render('visitor', { data: result });
  });
};

// GET /visitor/:id
exports.getVisitor = (req, res) => {
  console.log(req.params);
  console.log(req.params.id);

  Visiotor.getVisitor(req.params.id, (result) => {
    console.log('Cvisitor.js 데이터 하나 조회', result); // {}
    res.send(result);
  });
};

// POST /visitor
exports.postVisitor = (req, res) => {
  console.log(req.body); // {id, name, comment}
  Visiotor.postVisitor(req.body, (result) => {
    console.log('Cvisitor.js post', result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

// DELETE /visitor
exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  Visiotor.deleteVisitor(req.body.id, (result) => {
    console.log('Cvisitor.js delete', result);
    res.send(`${req.body.id} 번 방명록 삭제 완료!`);
  });
};

// PATCH /visitor
exports.patchVisitor = (req, res) => {
  console.log('Cvisitor.js patch', req.body); // {id, name, comment}
  Visiotor.patchVisitor(req.body, (result) => {});
  res.send('수정 완료');
}; // exports.getVisitors = ();
