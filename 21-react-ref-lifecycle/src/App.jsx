import { RefClass1, RefClass2 } from './components/RefClass';
import { RefFunc1, RefFunc2 } from './components/RefFunction';
import PracticeRef from './components/PracticeRef';
import PracticeRef2 from './components/PracticeRef2';

function App() {
  return (
    <div className="App">
      <h1>ref</h1>
      <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 />
      <br></br>
      <br></br>
      <PracticeRef />
      <br />
      <br />
      <PracticeRef2 />
    </div>
  );
}

export default App;
