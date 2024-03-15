// export default function
export default function practice() {
  let name, animal;
  name = '백구';
  animal = '개';

  let a, b;
  a = 5;
  b = 4;

  let title = 'Hello world';
  return (
    <div>
      <h1>
        제 반려 동물의 이름은 {name}, {name}는 {animal}입니다.
      </h1>
      <br />
      <span>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</span>
      <br />
      <span>{a > b && 'a가 b보다 큽니다'}</span>
      <br />
      <br />

      <div className="hello">
        <h1>{title}</h1>
        <label for="id">아이디: </label>
        <input type="text" id="id" />
        <br />
        <br />
        <label for="pw">비밀번호: </label>
        <input type="password" id="pw" />
      </div>
    </div>
  );
}
