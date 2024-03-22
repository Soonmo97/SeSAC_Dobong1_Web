import SyntheticEvent from './SyntheticEvent';
import Counter from './Counter';
import {
  HadnlerEx3,
  HandlerEx,
  HandlerEx2,
  HandlerEx4,
} from './components/ex/HandlerEx';
import EntirePractice from './practice/EntirePactice';

function App() {
  return (
    <div className="App">
      <h1>합성 이벤트</h1>
      <SyntheticEvent />
      <Counter />
      <hr />
      <h1>이벤트 핸들링 실습</h1>
      <br></br>
      <HandlerEx />
      <HandlerEx2 />
      <br />
      <HadnlerEx3 />
      <HandlerEx4 />
      <hr />
      <h1 style={{ textAlign: 'center' }}>실습문제</h1>
      <EntirePractice />
    </div>
  );
}

export default App;
