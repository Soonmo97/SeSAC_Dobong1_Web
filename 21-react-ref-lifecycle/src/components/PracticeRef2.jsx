import { useRef } from 'react';
export default function PracticeRef2() {
  Math.random();
  const op = ['+', '-', '*'];
  const opNum = Math.floor(Math.random() * 3);
  const num1 = Math.floor(Math.random() * 11);
  const num2 = Math.floor(Math.random() * 11);

  const inputRef = useRef();

  const result = () => {
    console.log(num1, num2);
    console.log(inputRef.current.value);
    console.log(op[opNum]);
    switch (op[opNum]) {
      case '+':
        num1 + num2 === Number(inputRef.current.value)
          ? alert('정답입니다.')
          : alert('오답입니다.');
        break;
      case '-':
        num1 - num2 === Number(inputRef.current.value)
          ? alert('정답입니다.')
          : alert('오답입니다.');
        break;
      case '*':
        num1 * num2 === Number(inputRef.current.value)
          ? alert('정답입니다.')
          : alert('오답입니다.');
        break;
    }
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>
        {num1} {op[opNum]} {num2}
      </h2>
      <input type="text" ref={inputRef} />
      <br />
      <br />
      <button onClick={result}>정답 제출</button>
    </div>
  );
}
