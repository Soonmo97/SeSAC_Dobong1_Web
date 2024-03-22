// 실습 1번
export function PropsPractice1(props) {
  return (
    <div>
      <h2>
        제가 좋아하는 음식은 <span style={{ color: 'red' }}>{props.food}</span>{' '}
        입니다.
      </h2>
    </div>
  );
}

PropsPractice1.defaultProps = {
  food: '갈비찜',
};

// 실습 2번
export function PropsPractice2(props) {
  const { title, author, price, type } = props;
  return (
    <div className="practice2">
      <h1>이번주 베스트셀러</h1>
      <img
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MDRfMjgg%2FMDAxNjUxNjU4MzMzMDgw.Im8fSn9-4lCkXseOhT1wn5dS1i2TbFDU00Qk2gLcDmog.ZFv0F5aYDqwukM9T1bXPTuXyC6hr1JPwEk3yQdor7vEg.JPEG.sj351510%2FScreenshot%25A3%25DF20220504%25A3%25AD185802%25A3%25DFNAVER.jpg&type=a340"
        alt="책 이미지"
      />
      <h2>{title}</h2>
      <div className="des">
        <span>저자: {author}</span>
        <span>판매가: {price}</span>
        <span>구분: {type}</span>
      </div>
    </div>
  );
}

// 실습 3번
export function PropsPractice3(props) {
  const { text, valid } = props;

  const validConsole = () => {
    console.log(valid);
  };

  return (
    <div>
      <h2>{text && text}</h2>
      <button onClick={validConsole}>콘솔 메세지</button>
    </div>
  );
}

PropsPractice3.defaultProps = {
  text: '이건 기본 text props입니다.',
};
