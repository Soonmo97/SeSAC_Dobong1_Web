const express = require('express');
const http = require('http');
const app = express();
const socketIO = require('socket.io');
const server = http.createServer(app);

// 소켓이 http모듈로 생성된 서버에 동작
const io = socketIO(server);
const PORT = 8080;
const dmMember = [];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

app.get('/room', (req, res) => {
  res.render('room');
});

app.get('/practice', (req, res) => {
  res.render('practice1');
});

app.get('/practice2', (req, res) => {
  res.render('practice2');
});

io.on('connection', (socket) => {
  console.log('socket id >>', socket.id);
  /* socket.on("event_name", (arg1, arg2, arg3, cb) => {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    cb("응답!");
  }); */

  //   socket.on("new_message", (message, cb) => {
  //     console.log(message);
  //     cb(message);
  //   });

  socket.on('new_message', (message) => {
    // io -> sockets
    io.emit('message_render', message);
  });

  socket.on('disconnect', () => {
    console.log(`${socket.id} 연결 종료`);
  });

  // ------------[room.ejs], 채팅방 만들기 ----------
  // console.log('방 만들어지기 전,', socket.room);
  // 2. 클라이언트에게 방 이름을 전달받아서 방 생성
  socket.on('join', (chatRoom) => {
    console.log(chatRoom);

    socket.join(chatRoom); // join(채팅방이름) 이용해서 채팅방 만들기
    // console.log("방 만들고 나서, ", socket.rooms);
    socket.room = chatRoom;

    // 3. 내가 포함한 방 client에게 입장 메세지 전달
    // 나 빼고 내가 참여한 채팅방 모두에게
    socket.broadcast
      .to(chatRoom)
      .emit('userjoin', `[${socket.id}]님이 입장하셨습니다.`);

    // 나 포함 내가 참여한 채팅방 모두에게
    // io.to(chatRoom).emit('userjoin', `[${socket.id}]님이 입장하셨습니다.`);
  });

  // 6. 하나의 클라이언트에게 메세지를 받아서
  //    (특정 방의) 전체 클라이언트에게 보낸다.
  socket.on('message', (message) => {
    console.log(message);

    io.to(socket.room).emit('message_toAll', message, socket.id);
  });

  // --------------- 실습 -----------------
  // 실습 1
  socket.on('practice', (msg, cb) => {
    console.log('client :', msg);
    console.log(msg);
    // cb(msg);
    // console.log(cb);
    cb(msg);
  });

  // 실습 2,4 나 포함 모든사람에게(io) 메세지, 작성자 보내기
  socket.on('message2', (message, id) => {
    console.log(message);
    io.emit('message_toAll', message, id.slice(0, 4));
  });

  // 실습 3 나 제외 모든사람에게(socket.bradcast) 입장 메세지 보내기
  socket.broadcast.emit('userjoin2', `${socket.id}님이 입장하셨습니다.`);

  // 실습 5 현재 채팅방에 존재하는 멤버 목록(소켓들) 보내주기
  io.emit('dmMember', io.sockets.sockets);
  // for (let socketId in io.sockets.sockets) {
  //   console.log(io.sockets.sockets[socketId].id);
  // }
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
