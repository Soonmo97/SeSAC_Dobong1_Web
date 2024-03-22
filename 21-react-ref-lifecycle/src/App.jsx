import { RefClass1, RefClass2 } from './components/RefClass';
import { RefFunc1, RefFunc2 } from './components/RefFunction';
import PracticeRef from './components/PracticeRef';
import PracticeRef2 from './components/PracticeRef2';
import LifeCycleClass from './components/LifeCycleClass';
import LifeCycleFunc from './components/LifeCycleFunction';
import LifeCyclePractice1 from './components/LifeCyclePractice1';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      {/* <h1>ref</h1> */}
      {/* <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 />
      <br></br>
      <br></br>
      <PracticeRef />
      <br />
      <br />
      <PracticeRef2 /> */}
      {/* <h1>life cycle</h1> */}
      {/* <LifeCycleClass /> */}
      {/* <LifeCycleFunc /> */}
      {/* <h1>lifeCycle Practice1</h1> */}
      <Container>
        <LifeCyclePractice1 />
      </Container>
    </div>
  );
}

export default App;
