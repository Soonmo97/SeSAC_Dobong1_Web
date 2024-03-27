import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">홈으로</Link>
        </li>
        <li>
          <Link to={`/student/allie`}>학생</Link>
        </li>
        <li>
          <Link to={`/student/codingon`}>코딩온</Link>
        </li>
        <li>
          <Link to={`/student/new?name=jisoo`}>query</Link>
        </li>
      </ul>
    </header>
  );
}
