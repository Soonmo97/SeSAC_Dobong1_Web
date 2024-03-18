import { useState } from 'react';
import apple from '../../image/apple.jpg';
import bananas from '../../image/bananas.jpg';
import grapes from '../../image/grapes.jpg';
import peaches from '../../image/peaches.jpg';

function HandlerEx() {
  const [text, setText] = useState('Hello World!');

  function changeText(e, text) {
    console.log(e.target);
    setText(text);
  }

  return (
    <div>
      <h1>{text}</h1>
      <button
        onClick={(e) => {
          changeText(e, 'Goodbye World!');
        }}
      >
        클릭
      </button>
    </div>
  );
}

function HandlerEx2() {
  const [text, setText] = useState('검정색 글씨');
  const [color, setColor] = useState('black');

  const textColor = { color: color };

  const redText = () => {
    setColor('red');
    setText('빨간색 글씨');
  };

  const blueText = () => {
    setColor('blue');
    setText('파란색 글씨');
  };

  return (
    <div>
      <h1 style={textColor}>{text}</h1>
      <button onClick={redText}>빨간색</button>
      <button onClick={blueText}>파란색</button>
    </div>
  );
}

function HadnlerEx3() {
  const [text, setText] = useState('사라져라');
  const [display, setDisplay] = useState('block');

  const look = { display: display, fontWeight: 600 };

  const changeTextAndDisplay = () => {
    text === '사라져라' ? setText('보여라') : setText('사라져라');
    display === 'block' ? setDisplay('none') : setDisplay('block');
  };

  return (
    <div>
      <button onClick={changeTextAndDisplay}>{text}</button>
      <p style={look}>안녕하세요</p>
    </div>
  );
}

function HandlerEx4() {
  const [img, setImg] = useState(apple);
  const [color, setColor] = useState('white');
  const [bgColor, setBgColor] = useState('black');
  const [text, setText] = useState('text');

  function changeImg(e) {
    switch (e.target.value) {
      case 'bananas':
        setImg(bananas);
        break;

      case 'grapes':
        setImg(grapes);
        break;

      case 'peaches':
        setImg(peaches);
        break;

      default:
        setImg(apple);
        break;
    }
  }

  function changeBgColor(e) {
    setBgColor(e.target.value);
  }

  function changeColor(e) {
    setColor(e.target.value);
  }

  function changeText(e) {
    setText(e.target.value);
  }

  return (
    <>
      과일 :
      <select
        onChange={(e) => {
          changeImg(e);
        }}
      >
        <option value="apple">사과</option>
        <option value="bananas">바나나</option>
        <option value="grapes">포도</option>
        <option value="peaches">복숭아</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          changeBgColor(e);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          changeColor(e);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      <br />
      <label>
        내용 :<input type="text" onChange={changeText} />
      </label>
      <br />
      <img src={img} alt="과일 이미지" style={{ width: '200px' }} />
      <p style={{ backgroundColor: bgColor, color: color, width: '200px' }}>
        {text}
      </p>
    </>
  );
}

export { HandlerEx, HandlerEx2, HadnlerEx3, HandlerEx4 };
