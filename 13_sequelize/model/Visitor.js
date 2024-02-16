// exports.getVisitors = () => {
//   return [
//     { id: 1, name: 'allie', comment: '안녕하세요' },
//     { id: 2, name: '홍길동', comment: 'hello' },
//   ];
// };
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost', // DB가 설치된 호스트 IP 주소
  user: 'sesac', // DB 접속 유저이름
  password: '1234', // DB 접속 패스워드
  database: 'sesac', // DB 이름
});

// 전체 데이터 조회
// GET /visitor
exports.getVisitors = (cb) => {
  conn.query('SELECT * FROM visitor', (err, rows) => {
    if (err) throw err;

    console.log('Visitor.js 전체목록::', rows);

    cb(rows);
  });
};

exports.getVisitor = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;

    console.log('Visitor.js 데이터 하나 조회', rows);
    cb(rows[0]);
  });
};

// 데이터 등록
// POST /visitor
exports.postVisitor = (data, cb) => {
  conn.query(
    `INSERT INTO visitor VALUES (null,'${data.name}','${data.comment}')`,
    (err, rows) => {
      if (err) throw err;
      console.log('Visitor.js post', rows);

      cb(rows.insertId);
    }
  );
};

exports.deleteVisitor = (id, cb) => {
  console.log(id);
  conn.query(`DELETE FROM visitor WHERE id = ${id}`, (err, rows) => {
    if (err) throw err;

    cb(rows);
  });
};

exports.patchVisitor = (data, cb) => {
  console.log(data);
  conn.query(
    `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id = ${data.id}`,
    (err, rows) => {
      if (err) throw err;
      console.log('Visitor.js patch', rows);

      cb(true);
    }
  );
};
