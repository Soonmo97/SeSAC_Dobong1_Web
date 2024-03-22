import { useState } from 'react';

export default function MapPractice() {
  const [info, setInfo] = useState([
    { id: 1, name: '코디', email: 'codi@gmail.com' },
    { id: 2, name: '윤소희', email: 'yoonsohee@gmail.com' },
  ]);
  const [addName, setAddName] = useState('');
  const [addEmail, setAddEmail] = useState('');

  // 실제 등록시켜주는 함수
  const addInfo = () => {
    if (addName.trim().length === 0 || addEmail.trim().length === 0)
      return alert('이메일과 이름 모두 작성해주세요');
    setInfo(
      info.concat({
        id: info.length === 0 ? 1 : info[info.length - 1].id + 1,
        name: addName,
        email: addEmail,
      })
    );
    setAddName('');
    setAddEmail('');
  };

  // 엔터로 등록시켜주는 함수
  const activeEnter = (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      addInfo();
    }
  };

  // 더블 클릭했을 때 삭제되는 함수
  const deleteInfo = (id) => {
    setInfo(info.filter((info) => info.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        onChange={(e) => {
          setAddName(e.target.value);
        }}
        value={addName}
      />
      <input
        type="email"
        name="email"
        placeholder="이메일"
        onChange={(e) => {
          setAddEmail(e.target.value);
        }}
        value={addEmail}
        onKeyDown={activeEnter}
      />
      <button onClick={addInfo}>등록</button>
      {info.map((info) => (
        <h2
          key={info.id}
          onDoubleClick={() => {
            deleteInfo(info.id);
          }}
        >
          {info.name}: {info.email}
        </h2>
      ))}
    </div>
  );
}
