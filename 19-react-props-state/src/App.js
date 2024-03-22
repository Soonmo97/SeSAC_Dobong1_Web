import { ClassProps, ClassProps2 } from './components/ClassProps';
import { FunctionProps, FunctionProps2 } from './components/FunctionProps';
import {
  PropsPractice1,
  PropsPractice2,
  PropsPractice3,
} from './components/PropsPractice';
import './App.css';
import ClassState from './components/ClassState';
import FucntionState from './components/FunctionState';
import { StatePractice, PororoObj } from './components/StatePractice';
import PropsMap from './components/PropsMap';
import Alphabet from './components/Alphabet';
import MapPractice from './components/MapPractice';
import MapPractice2 from './components/MapPractice2';

function App() {
  const dataArr = [
    { name: 'peach', number: 5, price: 5000 },
    { name: 'banana', number: 1, price: 3000 },
    { name: 'apple', number: 10, price: 7000 },
    { name: 'grape', number: 2, price: 8500 },
  ];
  return (
    <div className="App">
      {/* <h1>hello, props</h1>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치" />
      <ClassProps2 name="포비" color="white" nickname="곰" bgColor="black" />
      <FunctionProps name="사과" number={5} price={1000} />
      <FunctionProps2 price={50000} />
      <FunctionProps2 price={10000} name="딸기">
        <section style={{ backgroundColor: 'yellow' }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2>
      <PropsPractice1 food="감자탕" />
      <PropsPractice2
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />
      <PropsPractice3
        text="App 컴포넌트에서 넘겨준 text props입니다. text"
        valid="콘솔띄우기 성공!"
      /> */}

      {/* <h1>hello, state</h1>
      <ClassState />
      <FucntionState />
      <hr />
      <h1>state실습</h1>
      <StatePractice />
      <PororoObj /> */}
      <h1>map과 filter 사용</h1>
      {/* <PropsMap arr={dataArr} /> */}
      <Alphabet />
      <h1>map 실습</h1>
      <MapPractice />
      <MapPractice2 />
    </div>
  );
}

export default App;
