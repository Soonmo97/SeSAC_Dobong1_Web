import HeaderMenu from '../components/Header';
import PostList from '../components/practice/PostList';
import { Link } from 'react-router-dom';

export default function Practice() {
  return (
    <>
      <HeaderMenu />
      {/* <Link to="matzip">맛집페이지</Link> */}
      <Link to="/practice/matzip">맛집페이지</Link>
      <h4>연습문제</h4>
      <PostList />
    </>
  );
}
