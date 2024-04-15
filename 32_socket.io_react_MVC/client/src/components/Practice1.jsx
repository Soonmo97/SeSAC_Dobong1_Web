import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080', { autoConnect: false });

export default function Practice1() {
  const initSocketConnect = () => {
    console.log(socket.connected);
    if (!socket.connected) socket.connect(); // 클라이언트 소켓에 접속
    // console.log('after connect', socket.connected)
  };

  useEffect(() => {
    initSocketConnect();
  }, []); // mount

  const [fromServerStr, setFromServerStr] = useState('');

  const hello = () => {
    socket.emit('hello', '안녕하세요');
    socket.on('hello2', (msg) => {
      setFromServerStr('hello: ' + msg);
    });
  };

  const study = () => {
    socket.emit('study', '공부합시다');
    socket.on('study2', (msg) => {
      setFromServerStr('study: ' + msg);
    });
  };

  const bye = () => {
    socket.emit('bye', '잘가');
    socket.on('bye2', (msg) => {
      setFromServerStr('bye: ' + msg);
    });
  };

  return (
    <>
      <button onClick={hello}>hello</button>
      <button onClick={study}>study</button>
      <button onClick={bye}>bye</button>
      <h3>{fromServerStr}</h3>
    </>
  );
}
