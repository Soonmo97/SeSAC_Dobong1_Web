function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log(e);
  }

  function printInputValue(e) {
    console.log(e.target.value);
  }

  return (
    // 이벤트 함수의 매개변수에 e(이벤트 객체만)존재해서 다른게 넘겨줄게 없을 때는 e(이벤트 객체)를 넘겨주지 않아도 된다.
    <div>
      <button onClick={syntheticEvent}>클릭이벤트 콘솔에 찍기</button>
      {/* <button onClick={(e) => {syntheticEvent(e)}}>클릭이벤트 콘솔에 찍기</button> */}
      <br />
      <input type="text" placeholder="입력" onChange={printInputValue} />
    </div>
  );
}

export default SyntheticEvent;
