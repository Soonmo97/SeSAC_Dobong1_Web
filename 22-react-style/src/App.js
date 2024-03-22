import './App.css';
import BasicCSS from './components/BasicCss';
import ModuleCSS from './components/ModuleCss';
import StyledComp from './components/StyledComp';
import StyledPractice from './components/StyledPractice';

function App() {
  return (
    <>
      <h1>react에 style 적용하기</h1>
      <BasicCSS />
      <ModuleCSS />
      <StyledComp />
      <StyledPractice />
    </>
  );
}

export default App;
