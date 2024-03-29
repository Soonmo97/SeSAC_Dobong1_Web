import Box from './components/Box';
import { AgeContext } from './contexts/AgeContext';
import { UserContext } from './contexts/UserContext';
import { ThemeContext } from './contexts/ThemeContext';
import Profile from './components/Profile';
import { useState } from 'react';
import AgeProvider from './components/provider/AgeProvider';
import NameProvider from './components/provider/NameProvider';

function App() {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState(20);

  return (
    <div className="App">
      <h1>상태관리1 context API</h1>

      {/* state가 아닌 값을 context에 저장 */}
      <ThemeContext.Provider value={'dark'}>
        <Box />
      </ThemeContext.Provider>

      {/* state 저장 해보기 */}
      <AgeProvider>
        <NameProvider>
          <Profile />
        </NameProvider>
      </AgeProvider>
    </div>
  );
}

export default App;
