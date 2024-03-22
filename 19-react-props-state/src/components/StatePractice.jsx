import { useState } from 'react';
import ChangeObj from './ChangeObj';

// state 실습
// 실습 1
// export default function StatePractice() {
//   const [number, setNumber] = useState(0);

//   function increase() {
//     setNumber(number + 1);
//   }

//   function decrease() {
//     setNumber(number - 2);
//   }
//   return (
//     <div>
//       <p>{number}</p>
//       <button onClick={increase}>+1</button>
//       <button onClick={decrease}>-2</button>
//     </div>
//   );
// }

// 추가 실습 1
function StatePractice() {
  const [number, setNumber] = useState(0);

  function increase() {
    setNumber(number + 1);
  }

  function decrease() {
    setNumber(number - 1);
  }
  return (
    <div>
      <p>{number >= 8 ? `${number}😡` : `${number}😊`}</p>
      <button onClick={increase}>1 증가</button>
      <button onClick={decrease}>1 감소</button>
    </div>
  );
}

// 추가 실습2
function PororoObj() {
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '7',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '5',
      nickName: '공주님',
    },
    {
      name: '크롱',
      age: '4',
      nickName: '장난꾸러기',
    },
  ];
  return (
    <div>
      <ChangeObj objArr={pororoObjArr} />
    </div>
  );
}

export { PororoObj, StatePractice };
