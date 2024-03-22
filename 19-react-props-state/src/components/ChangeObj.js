import { useState } from 'react';

export default function ChangeObj(props) {
  const { objArr } = props;
  const [index, setIndex] = useState(0);
  function changeArr() {
    index === props.objArr.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  return (
    <div>
      <p>이름: {objArr[index].name}</p>
      <p>나이: {objArr[index].age}</p>
      <p>별명: {objArr[index].nickName}</p>
      <button onClick={changeArr}>멤버 바꾸기</button>
    </div>
  );
}
