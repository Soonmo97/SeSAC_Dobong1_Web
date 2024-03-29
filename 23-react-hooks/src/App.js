import CustomHook from './components/CustomHook';
import UseCallback from './components/UseCallback';
import UseCallback2 from './components/UseCallback2';
import UseMemo from './components/UseMemo';
import UseMemoObj from './components/UseMemoObj';
import UseReducer from './components/UseReducer';
import useTitle from './hooks/useTitle';
import Form from './components/UseForm';
import PracticeForm from './components/PracticeForm';

function App() {
  useTitle('React hook!');
  return (
    <>
      <h1>react hook</h1>
      {/* <UseMemo />
      <UseMemoObj /> */}
      {/* <UseCallback /> */}
      {/* <UseCallback2 /> */}
      <UseReducer />
      {/* <CustomHook /> */}
      {/* <Form /> */}
      {/* <PracticeForm /> */}
    </>
  );
}

export default App;
