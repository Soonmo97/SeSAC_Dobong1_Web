import { useState } from 'react';

// export default function FucntionState() {
//   1. state 사용
//   const [apple, setApple] = useState('사과');
//   function inEnglish() {
//     setApple('apple');
//     console.log('state', apple);
//   }
//   return (
//     <div>
//       <div style={{ backgroundColor: 'red', color: 'white' }}>{apple}</div>
//       <button onClick={inEnglish}>영어로 바꾸기</button>
//     </div>
//   );
// }

// 2. 바닐라 JS로 사과 > apple > 사과 변경해보기
// export default function FucntionState() {
//   function changeLanguage() {
//     const apple = document.querySelector('.state div');
//     apple.innerText === '사과'
//       ? (apple.innerText = 'apple')
//       : (apple.innerText = '사과');
//   }
//   return (
//     <div className="state">
//       <div style={{ backgroundColor: 'red', color: 'white' }}>사과</div>
//       <button onClick={changeLanguage}>언어 변경</button>
//     </div>
//   );
// }

// 3. useState로 사과 > apple > 사과 변경해보기
export default function FucntionState() {
  // const [apple, setApple] = useState('사과');
  const [isEnglish, setIsEnglish] = useState(true);
  function changeLanguage() {
    // apple === '사과' ? setApple('apple') : setApple('사과');
    setIsEnglish(!isEnglish);
  }
  return (
    <div className="state">
      <div style={{ backgroundColor: 'red', color: 'white' }}>
        {isEnglish ? 'apple' : '사과'}
      </div>
      <button onClick={changeLanguage}>
        {isEnglish ? '한글' : '영어'}로 변경
      </button>
    </div>
  );
}
