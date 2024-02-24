const bcrypt = require('bcrypt'); // 강력한 암호화 모듈

// 솔토의 라운드 수 정의 >> 해시함수의 반복을 의미
// 숫자가 크면 안전하지만, 숫자가 크면 클수록 성능 저하를 일으킴
const saltRounds = 10;

// 1. 회원가입 >> 해시값 생성
function hashPW(pw) {
  // hashSync(비밀번호, 솔트라운드) // 리턴값은 암호화된 문자(string)
  return bcrypt.hashSync(pw, saltRounds);
}

// 2. 로그인 >> 해시값 일치 확인
function comparePW(inputPw, hashedPw) {
  // compareSync(원본비밀번호, 해시된 비밀번호)
  return bcrypt.compareSync(inputPw, hashedPw); // 리넡값은 true or false
}

module.exports = { hashPW, comparePW };
