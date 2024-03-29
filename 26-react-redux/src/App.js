import { Box1 } from './components/Box';
import Bank from './components/Practice';
import Test from './components/Test';

function App() {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState(20);

  return (
    <div className="App">
      <h1>상태관리2 redux</h1>
      {/* <Test /> */}
      <Box1 />
      <br />
      <Bank />
    </div>
  );
}

export default App;
