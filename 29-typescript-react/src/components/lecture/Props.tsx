interface Props1 {
  name: string;
}

export function Props1({ name }: Props1) {
  return <p>hello {name}</p>;
}

interface Props2 {
  // width: string;
  // height: string;
  // color: string;
  // key가 여러개 올 수 있어서 []안에 key안의 타입을 string 명시 그리고 값 들 타입 :string
  [key: string]: string;
}
export function Props2(props: Props2) {
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
  };
  return <div style={divStyle}></div>;
}

interface Props3 {
  width: number;
  height: number;
  color: string;
  text: string;
}

export function Props3(props: Props3) {
  const { width, height, color, text } = props;
  // { [key: string]: string }
  // object 타입 지정 이유는 interface(Props3)에 명시되있지 않는
  // ex)textAlign, backgroundColor, lineHeight 등이 존재해서 object로 타입 지정
  const divStyle: object = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color ? color : 'gray',
    textAlign: 'center',
    lineHeight: `${height}px`,
  };

  return <div style={divStyle}>{text}</div>;
}
