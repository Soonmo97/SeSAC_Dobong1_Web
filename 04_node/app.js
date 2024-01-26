const http = require('http');
const fs = require('fs');
const PORT = 8080;
const server = http.createServer(function (request, response) {
  // console.log(request.url);
  try {
    const data = fs.readFileSync('./index.html');
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    /*
    response.writeHead(상태코드, 헤더정보)
      - text/html: 응답의 콘텐트 형식이 HTML 이라는 의미
      - 인코딩 방식이 utf-8
  */
    response.write(data);
    response.end();
  } catch (error) {
    console.log(error);
    const data = fs.readFileSync('./404.html');
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    response.write(data);
    response.end();
  } finally {
    // 예외 발생과 상관없이 모두 실행
    console.log('성공 실패 모두 실행됩니다.');
  }
  // response.write('응답완료!');
  // response.end('<h3>진짜 완료!!</h3>');

  /*
    예외처리 try{ ~ } ~ catch(err){} 문
    try 스코프 내부 문장에서 오류가 났을 때 catch 문으로 err 보냄
  */
});

// 1. request 이벤트: 클라이언트 요청
server.on('request', function () {
  console.log('request 이벤트 실행!');
});

// 2. connection 이벤트: 클라이언트 접속했을 때 발생
server.on('connection', (req, res) => {
  console.log('connection 이벤트 발생');
});

server.listen(PORT, function () {
  console.log('sever is open!!');
  console.log(`http://localhost:${PORT}`);
});

// 프론트는 서버 종료안해도 바로 반영 안끄고 작업
// 서버는 변경 사항있어 수정할 시 서버끄고 작업
