const socketIO = require('socket.io');
function socketHandler(server) {
  // server: app.js에서 http 기반 서버 전달받을 예정
  const io = socketIO(server, {
    cors: {
      origin: 'http://localhost:3000', // react server와 통신하기 위함
    },
  });

  io.on('connection', (socket) => {
    io.emit('notice', `${socket.id}님이 입장하셨습니다.`);
  });
}

module.exports = socketHandler;
