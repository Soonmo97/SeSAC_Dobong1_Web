import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Notice from './Notice';
import Speech from './Speech';

const socket = io.connect('http://localhost:8080', {
  autoConnect: false,
});
export default function Chatting2() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const [msgInput, setMsgInput] = useState('');
  const [chatList, setChatList] = useState([
    {
      type: 'me', //me, other, notice
      content: '내가 작성한 메세지',
    },
    {
      type: 'other',
      content: '다른 사람이 작성한 메세지',
    },
    {
      type: 'notice',
      content: '~~~님이 입장하셨습니다.',
    },
  ]);

  // 닉네임 Input창
  const [nicknameInput, setNicknameInput] = useState('');
  // 내 닉네임을 관리하는 state (중복이 아닐 경우 담기)
  const [nickname, setNickname] = useState(null);

  // useEffect(() => {
  //   initSocketConnect();
  //   // [문제점] newChatList를 만들 때 mount시점의 chatList만 이용
  //   /* socket.on("notice", (notice) => {
  //     // {type: 'notice', content: notice}
  //     const newChatList = [
  //       ...chatList,
  //       { type: "notice", content: notice },
  //     ];

  //     setChatList(newChatList);
  //   }); */
  // }, []);

  useEffect(() => {
    socket.on('notice', (notice) => {
      // {type: 'notice', content: notice}
      const newChatList = [...chatList, { type: 'notice', content: notice }];

      setChatList(newChatList);
    });

    socket.on('exit', (notice) => {});
  }, [chatList]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const join = () => {
    initSocketConnect();

    // [닉네임사용1]: 중복체크를 위해 서버로 닉네임 전송
    socket.emit('checkNick', nicknameInput);
  };

  useEffect(() => {
    // [닉네임사용3] - 입장실패
    socket.on('error', (errMsg) => {
      alert(errMsg);
    });

    // [닉네임사용3] - 입장성공(2)
    // 사용 가능한 내 닉네임을 전달 받아서 nickname state애 저장
    socket.on('entrySuccess', (nick) => {
      setNickname(nick);
    });
  }, []);
  return (
    <>
      <ul>
        <li>닉네임 받고, 중복체크</li>
        <li>퇴장공고</li>
      </ul>
      {/* nickname이 null이면 닉네임 입력창
          nickname이 있으면 채팅창
      */}
      {!nickname ? (
        <div className="entry-box">
          <input
            type="text"
            placeholder="닉네임 입력"
            id="nickname"
            value={nicknameInput}
            onChange={(e) => setNicknameInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') join();
            }}
          />
          <button onClick={join}>채팅방 입장하기</button>
        </div>
      ) : (
        <div className="container">
          <header>코코아톡🐛-{nickname}</header>
          <section>
            {/* <Speech chat={chatList[0]} />
          <Speech chat={chatList[1]} />
          <Notice chat={chatList[2]} /> */}
            {chatList.map((chat, i) =>
              chat.type === 'notice' ? (
                <Notice key={i} chat={chat} />
              ) : (
                <Speech key={i} chat={chat} />
              )
            )}
          </section>
          <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
            <select id="dm-select">
              <option value="all">전체</option>
            </select>
            <input
              type="text"
              placeholder="메세지 입력"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button>전송</button>
          </form>
        </div>
      )}
    </>
  );
}
