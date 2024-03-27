import { Link, Routes, Route } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import StudentDetail from './pages/StudentDetail';
import './styles/common.scss';

// const MyLink = styled(Link)`
//   text-decoration: none;
//   color: black;
// `;

function App() {
  const students = [
    {
      id: 1,
      name: 'allie',
    },
    {
      id: 2,
      name: 'codingon',
    },
    {
      id: 3,
      name: 'new',
    },
  ];

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/student/:studentName"
          element={<StudentDetail students={students} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
