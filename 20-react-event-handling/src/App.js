import SyntheticEvent from './SyntheticEvent';
import Counter from './Counter';
import {
  HadnlerEx3,
  HandlerEx,
  HandlerEx2,
  HandlerEx4,
} from './components/ex/HandlerEx';

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
    </div>
  );
}

export default App;
